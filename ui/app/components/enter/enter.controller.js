const enterpathprefix = '/app/components/enter';
const enterbase = '/enter';
const confirm = '/enter/confirm';
angular
  .module('SwimResultinator')
  .controller('EnterCtrl', EnterCtrl)
  .config(function($routeProvider) {
    $routeProvider
      .when(enterbase, {
        templateUrl: enterpathprefix + "/enter.html",
        controller: EnterCtrl
      });
  });

function EnterCtrl($scope, $location, $route, $routeParams, EntryFactory, Entry, MeetFactory, SwimmerFactory, ConfigData) {

  var menu = { title: "Enter a Meet" };
  var swimmer, meets, config;
  var meetId;
  var raceEntries, entryEvents;
  var asaregno;

  angular.extend(this, {
    menu: menu,
    swimmer: swimmer,
    meets: meets,
    config: config,
    meetId: meetId,
    asaregno: asaregno,
    entryEvents: entryEvents,
    raceEntries: raceEntries,
    init: function() {
      var self = this;
      ConfigData.getConfig().then(function(data) {
        self.config = data;
      });

      MeetFactory.loadCurrentMeets().then(function(meets) {
        self.meets = meets;
      });

      self.raceEntries = new Array();
    },
    navigateTo: function(to, event) {
      $location.path('/enter' + to);
    },
    selectMeet: function() {
      var self = this;
      MeetFactory.getMeet(self.meetId).then(function(meet) {
        self.meet = meet;
        meet.getEntryEvents(self.swimmer).then(function(entryEvents) {
          console.log(entryEvents);
          self.entryEvents = entryEvents;
        });
      });
    },
    confirm: function() {

    },
    _createEntry: function() {
      var self = this;
      var entry = new Entry();
      entry.swimmer_id = self.swimmer.id;
      entry.meet_id = self.meet.id;
      entry.race_types_arr = self.raceEntries;
      entry.entrytimes = new Array();
      entry.cost_per_race = self.meet.cost_per_race;
      entry.admin_fee = self.meet.admin_fee;
      entry.payment_total = self.meet.getTotalCostForEntries(self.raceEntries);
      for(var i = 0; i < self.raceEntries.length; i++) {
        for(var j = 0; j < self.entryEvents.length; j++) {
          if(self.entryEvents[j].id == entry.race_types_arr[i]) {
            entry.entrytimes.push(self.entryEvents[j].best);
          }
        }
      }
      self.entry = entry;
    },
    moveToNext: function() {
      var self = this;
      message = '';

      if (!self.swimmer && self.asaregno) {
        SwimmerFactory.getSwimmerByRegNo(self.asaregno).then(function(swimmer) {
          self.swimmer = swimmer;
        }, function(error) {
          self.message = 'Failed to find swimmer: ' + error;
        });
      } else if (self.swimmer && self.meetId && self.raceEntries && !self.entry) {
        self._createEntry();
      } else if (self.entry) {
        self.entry.update().then(function(response) {
          if(response.status == 200) {
            self.status_message = "Entry saved";
          } else {
            self.status_message = "Error saving meet";
          }
        });
      }
    }
  });

  this.init();
}
