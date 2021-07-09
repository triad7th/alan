export const set = {
  "name": "scene",
  "info": {
    "type": "image",
    "x": 960,
    "y": 540,
    "w": 1920,
    "h": 1080,
    "src": "sets/ff-space2/scene/set.jpg",
    "class": "overflow",
    "style": {
      "left": -300,
      "top": -150,
      "width": 2500.0,
      "height": 1406.0
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
        "src": "sets/ff-space2/scene/hand/hand.png",
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
                "src": "sets/ff-space2/scene/hand/family/beb/beb.svg",
                "name": "beb",
                "parent": "family"
              },
              "children": [
                {
                  "name": "beb_eyel",
                  "info": {
                    "type": "svg",
                    "src": "<svg width=\"49.548\" height=\"57.806\" version=\"1.1\" viewBox=\"0 0 49.548 57.806\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"><metadata><rdf:RDF><cc:Work rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\"/><dc:title/></cc:Work></rdf:RDF></metadata>\r\n<path class=\"svgmorph\" d=\"m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z\" fill=\"#4b3f4e\"/>\r\n<circle class=\"iris\" cx=\"24.775\" cy=\"16.516\" r=\"8.258\" fill=\"#fff\"/>\r\n</svg>\r\n\r\n",
                    "act": {
                      "open": {
                        "d": "m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z"
                      },
                      "close": {
                        "d": "m24.774 57.806c-13.682 0-24.774-0.51359-24.774-1.1471v-0.38237c0-0.63352 11.092-1.1471 24.774-1.1471s24.774 0.51359 24.774 1.1471v0.38237c1e-3 0.63356-11.091 1.1471-24.774 1.1471z"
                      }
                    },
                    "x": 114.15480003356934,
                    "y": 83.78059997558594,
                    "w": 9.909600067138673,
                    "h": 11.561199951171876,
                    "class": "fit",
                    "name": "beb_eyel",
                    "parent": "beb"
                  },
                  "children": []
                },
                {
                  "name": "beb_eyer",
                  "info": {
                    "type": "svg",
                    "src": "<svg width=\"49.548\" height=\"57.806\" version=\"1.1\" viewBox=\"0 0 49.548 57.806\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"><metadata><rdf:RDF><cc:Work rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\"/><dc:title/></cc:Work></rdf:RDF></metadata>\r\n<path class=\"svgmorph\" d=\"m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z\" fill=\"#4b3f4e\"/>\r\n<circle class=\"iris\" cx=\"24.775\" cy=\"16.516\" r=\"8.258\" fill=\"#fff\"/>\r\n</svg>\r\n\r\n",
                    "act": {
                      "open": {
                        "d": "m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z"
                      },
                      "close": {
                        "d": "m24.774 57.806c-13.682 0-24.774-0.51359-24.774-1.1471v-0.38237c0-0.63352 11.092-1.1471 24.774-1.1471s24.774 0.51359 24.774 1.1471v0.38237c1e-3 0.63356-11.091 1.1471-24.774 1.1471z"
                      }
                    },
                    "x": 135.75480003356935,
                    "y": 77.38059997558595,
                    "w": 9.909600067138673,
                    "h": 11.561199951171876,
                    "class": "fit",
                    "name": "beb_eyer",
                    "parent": "beb"
                  },
                  "children": []
                }
              ]
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
                "src": "sets/ff-space2/scene/hand/family/bro/bro.svg",
                "name": "bro",
                "parent": "family"
              },
              "children": [
                {
                  "name": "bro_eyel",
                  "info": {
                    "type": "svg",
                    "src": "<svg width=\"49.548\" height=\"57.806\" version=\"1.1\" viewBox=\"0 0 49.548 57.806\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"><metadata><rdf:RDF><cc:Work rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\"/><dc:title/></cc:Work></rdf:RDF></metadata>\r\n<path class=\"svgmorph\" d=\"m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z\" fill=\"#4b3f4e\"/>\r\n<circle class=\"iris\" cx=\"24.775\" cy=\"16.516\" r=\"8.258\" fill=\"#fff\"/>\r\n</svg>\r\n\r\n",
                    "act": {
                      "open": {
                        "d": "m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z"
                      },
                      "close": {
                        "d": "m24.774 57.806c-13.682 0-24.774-0.51359-24.774-1.1471v-0.38237c0-0.63352 11.092-1.1471 24.774-1.1471s24.774 0.51359 24.774 1.1471v0.38237c1e-3 0.63356-11.091 1.1471-24.774 1.1471z"
                      }
                    },
                    "x": 74.59436510086059,
                    "y": 100.06884549140929,
                    "w": 27.713730201721187,
                    "h": 32.3326909828186,
                    "class": "fit",
                    "name": "bro_eyel",
                    "parent": "bro"
                  },
                  "children": []
                },
                {
                  "name": "bro_eyer",
                  "info": {
                    "type": "svg",
                    "src": "<svg width=\"49.548\" height=\"57.806\" version=\"1.1\" viewBox=\"0 0 49.548 57.806\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"><metadata><rdf:RDF><cc:Work rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\"/><dc:title/></cc:Work></rdf:RDF></metadata>\r\n<path class=\"svgmorph\" d=\"m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z\" fill=\"#4b3f4e\"/>\r\n<circle class=\"iris\" cx=\"24.775\" cy=\"16.516\" r=\"8.258\" fill=\"#fff\"/>\r\n</svg>\r\n\r\n",
                    "act": {
                      "open": {
                        "d": "m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z"
                      },
                      "close": {
                        "d": "m24.774 57.806c-13.682 0-24.774-0.51359-24.774-1.1471v-0.38237c0-0.63352 11.092-1.1471 24.774-1.1471s24.774 0.51359 24.774 1.1471v0.38237c1e-3 0.63356-11.091 1.1471-24.774 1.1471z"
                      }
                    },
                    "x": 163.5818651008606,
                    "y": 100.06884549140929,
                    "w": 27.713730201721187,
                    "h": 32.3326909828186,
                    "class": "fit",
                    "name": "bro_eyer",
                    "parent": "bro"
                  },
                  "children": []
                }
              ]
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
                "src": "sets/ff-space2/scene/hand/family/dad/dad.svg",
                "name": "dad",
                "parent": "family"
              },
              "children": [
                {
                  "name": "dad_eyel",
                  "info": {
                    "type": "svg",
                    "src": "<svg width=\"49.548\" height=\"57.806\" version=\"1.1\" viewBox=\"0 0 49.548 57.806\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"><metadata><rdf:RDF><cc:Work rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\"/><dc:title/></cc:Work></rdf:RDF></metadata>\r\n<path class=\"svgmorph\" d=\"m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z\" fill=\"#4b3f4e\"/>\r\n<circle class=\"iris\" cx=\"24.775\" cy=\"16.516\" r=\"8.258\" fill=\"#fff\"/>\r\n</svg>\r\n\r\n",
                    "act": {
                      "open": {
                        "d": "m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z"
                      },
                      "close": {
                        "d": "m24.774 57.806c-13.682 0-24.774-0.51359-24.774-1.1471v-0.38237c0-0.63352 11.092-1.1471 24.774-1.1471s24.774 0.51359 24.774 1.1471v0.38237c1e-3 0.63356-11.091 1.1471-24.774 1.1471z"
                      }
                    },
                    "x": 110.19731283187866,
                    "y": 134.50102472305298,
                    "w": 26.144625663757324,
                    "h": 30.502049446105957,
                    "class": "fit",
                    "name": "dad_eyel",
                    "parent": "dad"
                  },
                  "children": []
                },
                {
                  "name": "dad_eyer",
                  "info": {
                    "type": "svg",
                    "src": "<svg width=\"49.548\" height=\"57.806\" version=\"1.1\" viewBox=\"0 0 49.548 57.806\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"><metadata><rdf:RDF><cc:Work rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\"/><dc:title/></cc:Work></rdf:RDF></metadata>\r\n<path class=\"svgmorph\" d=\"m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z\" fill=\"#4b3f4e\"/>\r\n<circle class=\"iris\" cx=\"24.775\" cy=\"16.516\" r=\"8.258\" fill=\"#fff\"/>\r\n</svg>\r\n\r\n",
                    "act": {
                      "open": {
                        "d": "m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z"
                      },
                      "close": {
                        "d": "m24.774 57.806c-13.682 0-24.774-0.51359-24.774-1.1471v-0.38237c0-0.63352 11.092-1.1471 24.774-1.1471s24.774 0.51359 24.774 1.1471v0.38237c1e-3 0.63356-11.091 1.1471-24.774 1.1471z"
                      }
                    },
                    "x": 181.82231283187866,
                    "y": 134.50102472305298,
                    "w": 26.144625663757324,
                    "h": 30.502049446105957,
                    "class": "fit",
                    "name": "dad_eyer",
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
                "src": "sets/ff-space2/scene/hand/family/mom/mom.svg",
                "name": "mom",
                "parent": "family"
              },
              "children": [
                {
                  "name": "mom_eyel",
                  "info": {
                    "type": "svg",
                    "src": "<svg width=\"49.548\" height=\"57.806\" version=\"1.1\" viewBox=\"0 0 49.548 57.806\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"><metadata><rdf:RDF><cc:Work rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\"/><dc:title/></cc:Work></rdf:RDF></metadata>\r\n<path class=\"svgmorph\" d=\"m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z\" fill=\"#4b3f4e\"/>\r\n<circle class=\"iris\" cx=\"24.775\" cy=\"16.516\" r=\"8.258\" fill=\"#fff\"/>\r\n</svg>\r\n\r\n",
                    "act": {
                      "open": {
                        "d": "m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z"
                      },
                      "close": {
                        "d": "m24.774 57.806c-13.682 0-24.774-0.51359-24.774-1.1471v-0.38237c0-0.63352 11.092-1.1471 24.774-1.1471s24.774 0.51359 24.774 1.1471v0.38237c1e-3 0.63356-11.091 1.1471-24.774 1.1471z"
                      }
                    },
                    "x": 217.87504028320313,
                    "y": 109.65420776367188,
                    "w": 22.31008056640625,
                    "h": 26.02841552734375,
                    "class": "fit",
                    "name": "mom_eyel",
                    "parent": "mom"
                  },
                  "children": []
                }
              ]
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
                "src": "sets/ff-space2/scene/hand/family/sis/sis.svg",
                "name": "sis",
                "parent": "family"
              },
              "children": [
                {
                  "name": "sis_eyel",
                  "info": {
                    "type": "svg",
                    "src": "<svg width=\"49.548\" height=\"57.806\" version=\"1.1\" viewBox=\"0 0 49.548 57.806\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"><metadata><rdf:RDF><cc:Work rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\"/><dc:title/></cc:Work></rdf:RDF></metadata>\r\n<path class=\"svgmorph\" d=\"m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z\" fill=\"#4b3f4e\"/>\r\n<circle class=\"iris\" cx=\"24.775\" cy=\"16.516\" r=\"8.258\" fill=\"#fff\"/>\r\n</svg>\r\n\r\n",
                    "act": {
                      "open": {
                        "d": "m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z"
                      },
                      "close": {
                        "d": "m24.774 57.806c-13.682 0-24.774-0.51359-24.774-1.1471v-0.38237c0-0.63352 11.092-1.1471 24.774-1.1471s24.774 0.51359 24.774 1.1471v0.38237c1e-3 0.63356-11.091 1.1471-24.774 1.1471z"
                      }
                    },
                    "x": 75.83856296539307,
                    "y": 98.76998710632324,
                    "w": 20.177125930786133,
                    "h": 23.539974212646484,
                    "class": "fit",
                    "name": "sis_eyel",
                    "parent": "sis"
                  },
                  "children": []
                },
                {
                  "name": "sis_eyer",
                  "info": {
                    "type": "svg",
                    "src": "<svg width=\"49.548\" height=\"57.806\" version=\"1.1\" viewBox=\"0 0 49.548 57.806\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"><metadata><rdf:RDF><cc:Work rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\"/><dc:title/></cc:Work></rdf:RDF></metadata>\r\n<path class=\"svgmorph\" d=\"m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z\" fill=\"#4b3f4e\"/>\r\n<circle class=\"iris\" cx=\"24.775\" cy=\"16.516\" r=\"8.258\" fill=\"#fff\"/>\r\n</svg>\r\n\r\n",
                    "act": {
                      "open": {
                        "d": "m24.774 57.806c-13.682 0-24.774-11.092-24.774-24.774v-8.258c0-13.682 11.092-24.774 24.774-24.774s24.774 11.092 24.774 24.774v8.258c1e-3 13.683-11.091 24.774-24.774 24.774z"
                      },
                      "close": {
                        "d": "m24.774 57.806c-13.682 0-24.774-0.51359-24.774-1.1471v-0.38237c0-0.63352 11.092-1.1471 24.774-1.1471s24.774 0.51359 24.774 1.1471v0.38237c1e-3 0.63356-11.091 1.1471-24.774 1.1471z"
                      }
                    },
                    "x": 125.83856296539307,
                    "y": 98.76998710632324,
                    "w": 20.177125930786133,
                    "h": 23.539974212646484,
                    "class": "fit",
                    "name": "sis_eyer",
                    "parent": "sis"
                  },
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
