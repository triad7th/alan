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
                "src": "sets/ff/scene/hand/family/beb/beb.svg",
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
                    "x": 106.07470016479493,
                    "y": 95.78714981079102,
                    "w": 8.549400329589844,
                    "h": 9.974299621582032,
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
                    "x": 141.87470016479492,
                    "y": 95.78714981079102,
                    "w": 8.549400329589844,
                    "h": 9.974299621582032,
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
                "src": "sets/ff/scene/hand/family/bro/bro.svg",
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
                    "x": 74.7490200138092,
                    "y": 97.84797072410583,
                    "w": 26.328040027618407,
                    "h": 30.715941448211666,
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
                    "x": 151.30652001380918,
                    "y": 97.84797072410583,
                    "w": 26.328040027618407,
                    "h": 30.715941448211666,
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
                "src": "sets/ff/scene/hand/family/dad/dad.svg",
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
                    "x": 101.0078444480896,
                    "y": 156.40498065948486,
                    "w": 30.2656888961792,
                    "h": 35.30996131896973,
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
                    "x": 197.7578444480896,
                    "y": 156.40498065948486,
                    "w": 30.2656888961792,
                    "h": 35.30996131896973,
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
                "src": "sets/ff/scene/hand/family/mom/mom.svg",
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
                    "x": 75.50395141601562,
                    "y": 80.62126342773439,
                    "w": 26.847902832031252,
                    "h": 31.32252685546875,
                    "class": "fit",
                    "name": "mom_eyel",
                    "parent": "mom"
                  },
                  "children": []
                },
                {
                  "name": "mom_eyer",
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
                    "x": 181.74395141601562,
                    "y": 80.62126342773439,
                    "w": 26.847902832031252,
                    "h": 31.32252685546875,
                    "class": "fit",
                    "name": "mom_eyer",
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
                "src": "sets/ff/scene/hand/family/sis/sis.svg",
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
                    "x": 66.78942489624023,
                    "y": 108.87937545776367,
                    "w": 22.07884979248047,
                    "h": 25.758750915527344,
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
                    "x": 134.03942489624023,
                    "y": 109.12937545776367,
                    "w": 22.07884979248047,
                    "h": 25.758750915527344,
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
