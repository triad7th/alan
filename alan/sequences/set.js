export const set = {
  "name": "scene",
  "info": {
    "type": "image",
    "x": 960,
    "y": 540,
    "w": 1920,
    "h": 1080,
    "src": "sets/ff/scene/set.jpg",
    "class": "overflow",
    "style": {
      "left": -300,
      "top": -150,
      "width": 3627.0,
      "height": 1531.5
    },
    "choreo": {
      "C 6": {
        "type": "focus",
        "x": 0,
        "y": 0,
        "scale": 1,
        "rotate": 0
      },
      "C#6": {
        "type": "focus",
        "x": 900,
        "y": 750,
        "scale": 3,
        "rotate": 75
      },
      "D 6": {
        "type": "focus",
        "x": 400,
        "y": 400,
        "scale": 3,
        "rotate": 30
      },
      "D#6": {
        "type": "focus",
        "x": -250,
        "y": 500,
        "scale": 3,
        "rotate": 0
      },
      "E 6": {
        "type": "focus",
        "x": -800,
        "y": 850,
        "scale": 3,
        "rotate": -35
      },
      "F 6": {
        "type": "focus",
        "x": -900,
        "y": 1300,
        "scale": 3,
        "rotate": -75
      }
    },
    "name": "scene",
    "parent": null
  },
  "children": [
    {
      "name": "hand",
      "info": {
        "type": "image",
        "x": 1038,
        "y": 790,
        "w": 771,
        "h": 806,
        "ah": 1400,
        "src": "sets/ff/scene/hand/hand.png",
        "name": "hand",
        "parent": "scene"
      },
      "children": [
        {
          "name": "family",
          "info": {
            "type": "container",
            "x": 0,
            "y": 0,
            "name": "family",
            "parent": "hand"
          },
          "children": [
            {
              "name": "beb",
              "info": {
                "type": "image",
                "x": 800,
                "y": 350,
                "w": 160,
                "h": 160,
                "a": 75,
                "src": "sets/ff/scene/hand/family/beb/beb.png",
                "name": "beb",
                "parent": "family"
              },
              "children": []
            },
            {
              "name": "bro",
              "info": {
                "type": "image",
                "x": 400,
                "y": 0,
                "w": 226,
                "h": 226,
                "a": 0,
                "src": "sets/ff/scene/hand/family/bro/bro.png",
                "name": "bro",
                "parent": "family"
              },
              "children": []
            },
            {
              "name": "dad",
              "info": {
                "type": "image",
                "x": 0,
                "y": 375,
                "w": 300,
                "h": 300,
                "a": -75,
                "src": "sets/ff/scene/hand/family/dad/dad.svg",
                "name": "dad",
                "parent": "family"
              },
              "children": [
                {
                  "name": "dad_leye",
                  "info": {
                    "type": "image",
                    "x": 110,
                    "y": 150,
                    "w": 25,
                    "h": 29,
                    "src": "sets/ff/scene/hand/family/dad/dad_leye/dad_leye.svg",
                    "act": {
                      "close": {
                        "d": "m24.774 57.806c-13.682 0-24.774-0.51359-24.774-1.1471v-0.38237c0-0.63352 11.092-1.1471 24.774-1.1471s24.774 0.51359 24.774 1.1471v0.38237c1e-3 0.63356-11.091 1.1471-24.774 1.1471z"
                      }
                    },
                    "class": "fit",
                    "name": "dad_leye",
                    "parent": "dad"
                  },
                  "children": []
                },
                {
                  "name": "dad_reye",
                  "info": {
                    "type": "image",
                    "x": 190,
                    "y": 150,
                    "w": 25,
                    "h": 29,
                    "src": "sets/ff/scene/hand/family/dad/dad_reye/dad_reye.svg",
                    "act": {
                      "close": {
                        "d": "m24.774 57.806c-13.682 0-24.774-0.51359-24.774-1.1471v-0.38237c0-0.63352 11.092-1.1471 24.774-1.1471s24.774 0.51359 24.774 1.1471v0.38237c1e-3 0.63356-11.091 1.1471-24.774 1.1471z"
                      }
                    },
                    "class": "fit",
                    "name": "dad_reye",
                    "parent": "dad"
                  },
                  "children": []
                }
              ]
            },
            {
              "name": "mom",
              "info": {
                "type": "image",
                "x": 150,
                "y": 100,
                "w": 256,
                "h": 256,
                "a": -30,
                "src": "sets/ff/scene/hand/family/mom/mom.png",
                "name": "mom",
                "parent": "family"
              },
              "children": []
            },
            {
              "name": "sis",
              "info": {
                "type": "image",
                "x": 700,
                "y": 80,
                "w": 200,
                "h": 200,
                "a": 35,
                "src": "sets/ff/scene/hand/family/sis/sis.png",
                "name": "sis",
                "parent": "family"
              },
              "children": []
            }
          ]
        }
      ]
    }
  ]
}
