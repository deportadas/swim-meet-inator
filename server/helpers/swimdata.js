'use strict';

var config = {
  meet_types: ["Level 1", "Level 2", "Level 3", "Level 4"],
  levels: { 1 : "Level 1", 2: "Level 2", 3: "Level 3", 4: "Level 4"},
  lanes: ["6", "8", "10"],
  genders: {
    "M": "Male",
    "F": "Female"
  },
  meet_age_types: [
  {name: "Age on entry", code: "AOE"},
  {name: "Age on meet date", code: "AMD"},
  {name: "Age on 31st December", code: "AOD"}
  ],
  entry_groups: {
    1: { id: 1, name: "9 and under", min: 0, max: 10, description: "9 years and under" },
    2: { id: 2, name: "10", min: 10, max: 11, description: "10 - 11 year olds"  },
    3: { id: 3, name: "11", min: 11, max: 12, description: "11 - 12 year olds"  },
    4: { id: 4, name: "12", min: 12, max: 13, description: "12 - 13 year olds"  },
    5: { id: 5, name: "13", min: 13, max: 14, description: "13 - 14 year olds"  },
    6: { id: 6, name: "14", min: 14, max: 15, description: "14 - 15 year olds"  },
    7: { id: 7, name: "15", min: 15, max: 16, description: "15 - 16 year olds"  },
    8: { id: 8, name: "16+", min: 16, max: 1001, description: "Over 16s"  },
    9: { id: 9, name: "Open", min: 18, max: 1001, description: "Open"  }
  },
  strokes: {
    "FS": "Freestyle",
    "BK": "Backstroke",
    "BR": "Breaststroke",
    "BF": "Butterfly",
    "IM": "Individual medley",
    "MR": "Medley relay",
    "FR": "Freestyle relay",
  },
  races: {
    101: { id: 101, name: "25m Freestyle", stroke: "FS", course_type: "SC", distance: 25, lengths: 1, team: false, asa_course: "S", asa_stroke: 99 },
    102: { id: 102, name: "50m Freestyle", stroke: "FS", course_type: "SC", distance: 50, lengths: 2, team: false, asa_course: "S", asa_stroke: 1 },
    103: { id: 103, name: "100m Freestyle", stroke: "FS", course_type: "SC", distance: 100, lengths: 4, team: false, asa_course: "S", asa_stroke: 2 },
    104: { id: 104, name: "200m Freestyle", stroke: "FS", course_type: "SC", distance: 200, lengths: 8, team: false, asa_course: "S", asa_stroke: 3 },
    105: { id: 105, name: "400m Freestyle", stroke: "FS", course_type: "SC", distance: 400, lengths: 16, team: false, asa_course: "S", asa_stroke: 4 },
    106: { id: 106, name: "800m Freestyle", stroke: "FS", course_type: "SC", distance: 800, lengths: 32, team: false, asa_course: "S", asa_stroke: 5 },
    107: { id: 107, name: "1500m Freestyle", stroke: "FS", course_type: "SC", distance: 1500, lengths: 60, team: false, asa_course: "S", asa_stroke: 6 },
    108: { id: 108, name: "25m Backstroke", stroke: "BK", course_type: "SC", distance: 25, lengths: 1, team: false, asa_course: "S", asa_stroke: 99 },
    109: { id: 109, name: "50m Backstroke", stroke: "BK", course_type: "SC", distance: 50, lengths: 2, team: false, asa_course: "S", asa_stroke: 13 },
    110: { id: 110, name: "100m Backstroke", stroke: "BK", course_type: "SC", distance: 100, lengths: 4, team: false, asa_course: "S", asa_stroke: 14 },
    111: { id: 111, name: "200m Backstroke", stroke: "BK", course_type: "SC", distance: 200, lengths: 8, team: false, asa_course: "S", asa_stroke: 15 },
    112: { id: 112, name: "25m Breaststroke", stroke: "BR", course_type: "SC", distance: 25, lengths: 1, team: false, asa_course: "S", asa_stroke: 99 },
    113: { id: 113, name: "50m Breaststroke", stroke: "BR", course_type: "SC", distance: 50, lengths: 2, team: false, asa_course: "S", asa_stroke: 7 },
    114: { id: 114, name: "100m Breaststroke", stroke: "BR", course_type: "SC", distance: 100, lengths: 4, team: false, asa_course: "S", asa_stroke: 8 },
    115: { id: 115, name: "200m Breaststroke", stroke: "BR", course_type: "SC", distance: 200, lengths: 8, team: false, asa_course: "S", asa_stroke: 9 },
    116: { id: 116, name: "25m Butterfly", stroke: "BF", course_type: "SC", distance: 25, lengths: 1, team: false, asa_course: "S", asa_stroke: 99 },
    117: { id: 117, name: "50m Butterfly", stroke: "BF", course_type: "SC", distance: 50, lengths: 2, team: false, asa_course: "S", asa_stroke: 10 },
    118: { id: 118, name: "100m Butterfly", stroke: "BF", course_type: "SC", distance: 100, lengths: 4, team: false, asa_course: "S", asa_stroke: 11 },
    119: { id: 119, name: "200m Butterfly", stroke: "BF", course_type: "SC", distance: 200, lengths: 8, team: false, asa_course: "S", asa_stroke: 12 },
    120: { id: 120, name: "100m Individual medley", stroke: "IM", course_type: "SC", distance: 100, lengths: 4, team: false, asa_course: "S", asa_stroke: 18 },
    121: { id: 121, name: "200m Individual medley", stroke: "IM", course_type: "SC", distance: 200, lengths: 8, team: false, asa_course: "S", asa_stroke: 16 },
    122: { id: 122, name: "400m Individual medley", stroke: "IM", course_type: "SC", distance: 400, lengths: 16, team: false, asa_course: "S", asa_stroke: 17 },
    123: { id: 123, name: "4x25m Medley relay", stroke: "MR", course_type: "SC", distance: 100, lengths: 4, team: true },
    124: { id: 124, name: "4x50m Medley relay", stroke: "MR", course_type: "SC", distance: 200, lengths: 8, team: true },
    125: { id: 125, name: "4x100m Medley relay", stroke: "MR", course_type: "SC", distance: 400, lengths: 16, team: true },
    126: { id: 126, name: "4x25m Freestyle relay", stroke: "FR", course_type: "SC", distance: 100, lengths: 4, team: true },
    127: { id: 127, name: "4x50m Freestyle relay", stroke: "FR", course_type: "SC", distance: 200, lengths: 8, team: true },
    128: { id: 128, name: "4x100m Freestyle relay", stroke: "FR", course_type: "SC", distance: 400, lengths: 16, team: true },
    201: { id: 201, name: "50m Freestyle", stroke: "FS", course_type: "LC", distance: 50, lengths: 1, team: false, asa_course: "L", asa_stroke: 1 },
    202: { id: 202, name: "100m Freestyle", stroke: "FS", course_type: "LC", distance: 100, lengths: 2, team: false, asa_course: "L", asa_stroke: 2 },
    203: { id: 203, name: "200m Freestyle", stroke: "FS", course_type: "LC", distance: 200, lengths: 4, team: false, asa_course: "L", asa_stroke: 3 },
    204: { id: 204, name: "400m Freestyle", stroke: "FS", course_type: "LC", distance: 400, lengths: 8, team: false, asa_course: "L", asa_stroke: 4 },
    205: { id: 205, name: "800m Freestyle", stroke: "FS", course_type: "LC", distance: 800, lengths: 16, team: false, asa_course: "L", asa_stroke: 5 },
    206: { id: 206, name: "1500m Freestyle", stroke: "FS", course_type: "LC", distance: 1500, lengths: 32, team: false, asa_course: "L", asa_stroke: 6 },
    207: { id: 207, name: "50m Backstroke", stroke: "BK", course_type: "LC", distance: 50, lengths: 1, team: false, asa_course: "L", asa_stroke: 13 },
    208: { id: 208, name: "100m Backstroke", stroke: "BK", course_type: "LC", distance: 100, lengths: 2, team: false, asa_course: "L", asa_stroke: 14 },
    209: { id: 209, name: "200m Backstroke", stroke: "BK", course_type: "LC", distance: 200, lengths: 4, team: false, asa_course: "L", asa_stroke: 15 },
    210: { id: 210, name: "50m Breaststroke", stroke: "BR", course_type: "LC", distance: 50, lengths: 1, team: false, asa_course: "L", asa_stroke: 7 },
    212: { id: 212, name: "200m Breaststroke", stroke: "BR", course_type: "LC", distance: 200, lengths: 4, team: false, asa_course: "L", asa_stroke: 8 },
    211: { id: 211, name: "100m Breaststroke", stroke: "BR", course_type: "LC", distance: 100, lengths: 2, team: false, asa_course: "L", asa_stroke: 9 },
    213: { id: 213, name: "50m Butterfly", stroke: "BF", course_type: "LC", distance: 50, lengths: 1, team: false, asa_course: "L", asa_stroke: 10 },
    214: { id: 214, name: "100m Butterfly", stroke: "BF", course_type: "LC", distance: 100, lengths: 2, team: false, asa_course: "L", asa_stroke: 11 },
    215: { id: 215, name: "200m Butterfly", stroke: "BF", course_type: "LC", distance: 200, lengths: 4, team: false, asa_course: "L", asa_stroke: 12 },
    216: { id: 216, name: "200m Individual medley", stroke: "IM", course_type: "LC", distance: 200, lengths: 4, team: false, asa_course: "L", asa_stroke: 16 },
    217: { id: 217, name: "400m Individual medley", stroke: "IM", course_type: "LC", distance: 400, lengths: 8, team: false, asa_course: "L", asa_stroke: 17 },
    218: { id: 218, name: "4x50m Medley relay", stroke: "MR", course_type: "LC", distance: 200, lengths: 4, team: true },
    219: { id: 219, name: "4x100m Medley relay", stroke: "MR", course_type: "LC", distance: 400, lengths: 8, team: true },
    220: { id: 220, name: "4x200m Medley relay", stroke: "MR", course_type: "LC", distance: 800, lengths: 16, team: true },
    221: { id: 221, name: "4x50m Freestyle relay", stroke: "FR", course_type: "LC", distance: 200, lengths: 4, team: true },
    222: { id: 222, name: "4x100m Freestyle relay", stroke: "FR", course_type: "LC", distance: 400, lengths: 8, team: true },
    223: { id: 223, name: "4x200m Medley relay", stroke: "FR", course_type: "LC", distance: 800, lengths: 16, team: true },
  },
  event_types: [
  {name: "Heat declared winner", code: "HDW"},
  {name: "Final decides winner", code: "FDW"}
  ],
  course_types: [
  {name: "Short course (25m)", code: "SC" },
  {name: "Long course (50m)", code: "LC" }
  ],
  user_roles: {
    "user": { name: "User" },
    "admin": { name: "Administrator" },
    "superAdmin": { name: "Super Admin" }
  }
}

module.exports = config;
