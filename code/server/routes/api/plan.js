const express = require('express');

const router = express.Router();

// Add Posts
router.post('/', async (req, res) => {
    console.log("test")
    const plan = await loadPostCollection();
    console.log(plan)
    res.send(await loadPostCollection())
});


async function loadPostCollection() {
    const planData = [

        {
            "header": {
                "discipline": "Marathon",
                "goal": "02:59:00",
                "endDate": "29.08.2021",
                "weeks": 12
            },
            "plan": [
                {
                    "weekNum": 1,
                    "date": "07.06 - 13.06",
                    "days": [
                        {
                            "dayNo": 1,
                            "day" : "Montag",
                            "date" : "07.06.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 2,
                            "day" : "Dienstag",
                            "date" : "08.06.2021",
                            "unit": "Dauerlauf",
                            "info": "mit schnellem Endspurt",
                            "extraInfo": "15",
                            "distance" : "5.0",
                            "pulse": ["0", "85", "0", "15"]
                        },
                        {
                            "dayNo": 3,
                            "day" : "Mittwoch",
                            "date" : "09.06.2021",
                            "unit": "Fahrtspiel",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "11.0",
                            "pulse": ["25", "25", "25", "25"]
                        },
                        {
                            "dayNo": 4,
                            "day" : "Donnerstag",
                            "date" : "10.06.2021",
                            "unit": "Fahrtspiel",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "10.0",
                            "pulse": ["25", "25", "25", "25"]
                        },
                        {
                            "dayNo": 5,
                            "day" : "Freitag",
                            "date" : "11.06.2021",
                            "unit": "Dauerlauf",
                            "info": "mit schnellem Endspurt",
                            "extraInfo": "10",
                            "distance" : "13.0",
                            "pulse": ["0", "90", "0", "10"]
                        },
                        {
                            "dayNo": 6,
                            "day" : "Samstag",
                            "date" : "12.06.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "10",
                            "distance" : "25.0",
                            "pulse": ["0", "90", "10", "0"]
                        },
                        {
                            "dayNo": 7,
                            "day" : "Sonntag",
                            "date" : "13.06.2021",
                            "unit": "Dauerlauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "28.5",
                            "pulse": ["0", "100", "0", "0"]
                        }
                    ]
                },
                {
                    "weekNum": 2,
                    "date": "14.06 - 20.06",
                    "days": [
                        {
                            "dayNo": 1,
                            "day" : "Montag",
                            "date" : "14.06.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 2,
                            "day" : "Dienstag",
                            "date" : "15.06.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 3,
                            "day" : "Mittwoch",
                            "date" : "16.06.2021",
                            "unit": "Dauerlauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "22.5",
                            "pulse": ["0", "100", "0", "0"]
                        },
                        {
                            "dayNo": 4,
                            "day" : "Donnerstag",
                            "date" : "17.06.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "15",
                            "distance" : "5.0",
                            "pulse": ["0", "85", "15", "0"]
                        },
                        {
                            "dayNo": 5,
                            "day" : "Freitag",
                            "date" : "18.06.2021",
                            "unit": "Dauerlauf",
                            "info": "mit schnellem Endspurt",
                            "extraInfo": "20",
                            "distance" : "22.5",
                            "pulse": ["0", "80", "0", "20"]
                        },
                        {
                            "dayNo": 6,
                            "day" : "Samstag",
                            "date" : "19.06.2021",
                            "unit": "Dauerlauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "28.0",
                            "pulse": ["0", "100", "0", "0"]
                        },
                        {
                            "dayNo": 7,
                            "day" : "Sonntag",
                            "date" : "20.06.2021",
                            "unit": "Dauerlauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "15.2 Km",
                            "pulse": ["0", "100", "0", "0"]
                        }
                    ]
                },
                {
                    "weekNum": 3,
                    "date": "21.06 - 27.06",
                    "days": [
                        {
                            "dayNo": 1,
                            "day" : "Montag",
                            "date" : "21.06.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 2,
                            "day" : "Dienstag",
                            "date" : "22.06.2021",
                            "unit": "Dauerlauf",
                            "info": "mit schnellem Endspurt",
                            "extraInfo": "20",
                            "distance" : "20.5",
                            "pulse": ["0", "80", "0", "20"]
                        },
                        {
                            "dayNo": 3,
                            "day" : "Mittwoch",
                            "date" : "23.06.2021",
                            "unit": "Dauerlauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "20.5",
                            "pulse": ["0", "100", "0", "0"]
                        },
                        {
                            "dayNo": 4,
                            "day" : "Donnerstag",
                            "date" : "24.06.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "10",
                            "distance" : "18.5",
                            "pulse": ["0", "90", "10", "0"]
                        },
                        {
                            "dayNo": 5,
                            "day" : "Freitag",
                            "date" : "25.06.2021",
                            "unit": "Dauerlauf",
                            "info": "mit schnellem Endspurt",
                            "extraInfo": "15",
                            "distance" : "20.5",
                            "pulse": ["0", "80", "0", "15"]
                        },
                        {
                            "dayNo": 6,
                            "day" : "Samstag",
                            "date" : "26.06.2021",
                            "unit": "Regenerationslauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "5.0",
                            "pulse": ["100", "0", "0", "0"]
                        },
                        {
                            "dayNo": 7,
                            "day" : "Sonntag",
                            "date" : "27.06.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "25",
                            "distance" : "26.0",
                            "pulse": ["0", "75", "25", "0"]
                        }
                    ]
                },
                {
                    "weekNum": 4,
                    "date": "28.06 - 04.07",
                    "days": [
                        {
                            "dayNo": 1,
                            "day" : "Montag",
                            "date" : "28.06.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 2,
                            "day" : "Dienstag",
                            "date" : "29.06.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "10",
                            "distance" : "15.0",
                            "pulse": ["0", "90", "10", "0"]
                        },
                        {
                            "dayNo": 3,
                            "day" : "Mittwoch",
                            "date" : "30.06.2021",
                            "unit": "Regenerationslauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "14.0",
                            "pulse": ["100", "0", "0", "0"]
                        },
                        {
                            "dayNo": 4,
                            "day" : "Donnerstag",
                            "date" : "01.07.2021",
                            "unit": "Wechsellauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "10.0 Km",
                            "pulse": ["0", "50", "50", "0"]
                        },
                        {
                            "dayNo": 5,
                            "day" : "Freitag",
                            "date" : "02.07.2021",
                            "unit": "Regenerationslauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "12.0",
                            "pulse": ["100", "0", "0", "0"]
                        },
                        {
                            "dayNo": 6,
                            "day" : "Samstag",
                            "date" : "03.07.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "10",
                            "distance" : "17.0 Km",
                            "pulse": ["0", "90", "10", "0"]
                        },
                        {
                            "dayNo": 7,
                            "day" : "Sonntag",
                            "date" : "04.07.2021",
                            "unit": "Regenerationslauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "6.0",
                            "pulse": ["100", "0", "0", "0"]
                        }
                    ]
                },
                {
                    "weekNum": 5,
                    "date": "05.07 - 11.07",
                    "days": [
                        {
                            "dayNo": 1,
                            "day" : "Montag",
                            "date" : "05.07.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 2,
                            "day" : "Dienstag",
                            "date" : "06.07.2021",
                            "unit": "Extensive Intervalle",
                            "info": "5 Wiederholungen",
                            "extraInfo": "null",
                            "distance" : "19.0",
                            "pulse": ["20", "0", "30", "50"]
                        },
                        {
                            "dayNo": 3,
                            "day" : "Mittwoch",
                            "date" : "07.07.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "15",
                            "distance" : "23.0",
                            "pulse": ["0", "85", "15", "0"]
                        },
                        {
                            "dayNo": 4,
                            "day" : "Donnerstag",
                            "date" : "08.07.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "20",
                            "distance" : "13.5",
                            "pulse": ["0", "80", "20", "0"]
                        },
                        {
                            "dayNo": 5,
                            "day" : "Freitag",
                            "date" : "09.07.2021",
                            "unit": "Wechsellauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "12.0",
                            "pulse": ["0", "50", "50", "0"]
                        },
                        {
                            "dayNo": 6,
                            "day" : "Samstag",
                            "date" : "10.07.2021",
                            "unit": "Regenerationslauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "5.0",
                            "pulse": ["100", "0", "0", "0"]
                        },
                        {
                            "dayNo": 7,
                            "day" : "Sonntag",
                            "date" : "11.07.2021",
                            "unit": "Dauerlauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "34.5",
                            "pulse": ["0", "100", "0", "0"]
                        }
                    ]
                },
                {
                    "weekNum": 6,
                    "date": "12.07 - 18.07",
                    "days": [
                        {
                            "dayNo": 1,
                            "day" : "Montag",
                            "date" : "12.07.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 2,
                            "day" : "Dienstag",
                            "date" : "13.07.2021",
                            "unit": "Extensive Intervalle",
                            "info": "5 Wiederholungen",
                            "extraInfo": "null",
                            "distance" : "14.0",
                            "pulse": ["20", "0", "30", "50"]
                        },
                        {
                            "dayNo": 3,
                            "day" : "Mittwoch",
                            "date" : "14.07.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "15",
                            "distance" : "26.5 Km",
                            "pulse": ["0", "85", "15", "0"]
                        },
                        {
                            "dayNo": 4,
                            "day" : "Donnerstag",
                            "date" : "15.07.2021",
                            "unit": "Fahrtspiel",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "13.0 Km",
                            "pulse": ["25", "25", "25", "25"]
                        },
                        {
                            "dayNo": 5,
                            "day" : "Freitag",
                            "date" : "16.07.2021",
                            "unit": "Dauerlauf",
                            "info": "mit schnellem Endspurt",
                            "extraInfo": "10",
                            "distance" : "26.5",
                            "pulse": ["0", "90", "0", "10"]
                        },
                        {
                            "dayNo": 6,
                            "day" : "Samstag",
                            "date" : "17.07.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 7,
                            "day" : "Sonntag",
                            "date" : "18.07.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "20",
                            "distance" : "32.0 Km",
                            "pulse": ["0", "80", "20", "0"]
                        }
                    ]
                },
                {
                    "weekNum": 7,
                    "date": "19.07 - 25.07",
                    "days": [
                        {
                            "dayNo": 1,
                            "day" : "Montag",
                            "date" : "19.07.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 2,
                            "day" : "Dienstag",
                            "date" : "20.07.2021",
                            "unit": "Extensive Intervalle",
                            "info": "5 Wiederholungen",
                            "extraInfo": "null",
                            "distance" : "14.0",
                            "pulse": ["20", "0", "30", "50"]
                        },
                        {
                            "dayNo": 3,
                            "day" : "Mittwoch",
                            "date" : "21.07.2021",
                            "unit": "Fahrtspiel",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "19.0",
                            "pulse": ["25", "25", "25", "25"]
                        },
                        {
                            "dayNo": 4,
                            "day" : "Donnerstag",
                            "date" : "22.07.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "30",
                            "distance" : "7.5 Km",
                            "pulse": ["0", "70", "30", "0"]
                        },
                        {
                            "dayNo": 5,
                            "day" : "Freitag",
                            "date" : "23.07.2021",
                            "unit": "Dauerlauf",
                            "info": "mit schnellem Endspurt",
                            "extraInfo": "10",
                            "distance" : "25.0",
                            "pulse": ["0", "90", "0", "10"]
                        },
                        {
                            "dayNo": 6,
                            "day" : "Samstag",
                            "date" : "24.07.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "20",
                            "distance" : "32.0 Km",
                            "pulse": ["0", "80", "20", "0"]
                        },
                        {
                            "dayNo": 7,
                            "day" : "Sonntag",
                            "date" : "25.07.2021",
                            "unit": "Dauerlauf",
                            "info": "mit schnellem Endspurt",
                            "extraInfo": "10",
                            "distance" : "24.5",
                            "pulse": ["0", "90", "10", "0"]
                        }
                    ]
                },
                {
                    "weekNum": 8,
                    "date": "26.07 - 01.08",
                    "days": [
                        {
                            "dayNo": 1,
                            "day" : "Montag",
                            "date" : "26.07.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 2,
                            "day" : "Dienstag",
                            "date" : "27.07.2021",
                            "unit": "Regenerationslauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "12.0",
                            "pulse": ["100", "0", "0", "0"]
                        },
                        {
                            "dayNo": 3,
                            "day" : "Mittwoch",
                            "date" : "28.07.2021",
                            "unit": "Dauerlauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "10.0",
                            "pulse": ["0", "100", "0", "0"]
                        },
                        {
                            "dayNo": 4,
                            "day" : "Donnerstag",
                            "date" : "29.07.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 5,
                            "day" : "Freitag",
                            "date" : "30.07.2021",
                            "unit": "Regenerationslauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "10.5",
                            "pulse": ["100", "0", "0", "0"]
                        },
                        {
                            "dayNo": 6,
                            "day" : "Samstag",
                            "date" : "31.07.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 7,
                            "day" : "Sonntag",
                            "date" : "01.08.2021",
                            "unit": "Halbmarathon",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "21.1",
                            "pulse": ["0", "0", "20", "80"]
                        }
                    ]
                },
                {
                    "weekNum": 9,
                    "date": "02.08 - 08.08",
                    "days": [
                        {
                            "dayNo": 1,
                            "day" : "Montag",
                            "date" : "02.08.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 2,
                            "day" : "Dienstag",
                            "date" : "03.08.2021",
                            "unit": "Extensive Intervalle",
                            "info": "5 Wiederholungen",
                            "extraInfo": "null",
                            "distance" : "14.0",
                            "pulse": ["20", "0", "30", "50"]
                        },
                        {
                            "dayNo": 3,
                            "day" : "Mittwoch",
                            "date" : "04.08.2021",
                            "unit": "Dauerlauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "5.5",
                            "pulse": ["0", "100", "0", "0"]
                        },
                        {
                            "dayNo": 4,
                            "day" : "Donnerstag",
                            "date" : "05.08.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "25",
                            "distance" : "20.5",
                            "pulse": ["0", "75", "25", "0"]
                        },
                        {
                            "dayNo": 5,
                            "day" : "Freitag",
                            "date" : "06.08.2021",
                            "unit": "Dauerlauf",
                            "info": "mit schnellem Endspurt",
                            "extraInfo": "15",
                            "distance" : "22.5",
                            "pulse": ["0", "85", "0", "15"]
                        },
                        {
                            "dayNo": 6,
                            "day" : "Samstag",
                            "date" : "07.08.2021",
                            "unit": "Fahrtspiel",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "16.0",
                            "pulse": ["25", "25", "25", "25"]
                        },
                        {
                            "dayNo": 7,
                            "day" : "Sonntag",
                            "date" : "08.08.2021",
                            "unit": "Dauerlauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "32.5",
                            "pulse": ["0", "100", "0", "0"]
                        }
                    ]
                },
                {
                    "weekNum": 10,
                    "date": "09.08 - 15.08",
                    "days": [
                        {
                            "dayNo": 1,
                            "day" : "Montag",
                            "date" : "09.08.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 2,
                            "day" : "Dienstag",
                            "date" : "10.08.2021",
                            "unit": "Extensive Intervalle",
                            "info": "5 Wiederholungen",
                            "extraInfo": "null",
                            "distance" : "14.0",
                            "pulse": ["20", "0", "30", "50"]
                        },
                        {
                            "dayNo": 3,
                            "day" : "Mittwoch",
                            "date" : "11.08.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "15",
                            "distance" : "10.5",
                            "pulse": ["0", "85", "15", "0"]
                        },
                        {
                            "dayNo": 4,
                            "day" : "Donnerstag",
                            "date" : "12.08.2021",
                            "unit": "Dauerlauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "25.0",
                            "pulse": ["0", "100", "0", "0"]
                        },
                        {
                            "dayNo": 5,
                            "day" : "Freitag",
                            "date" : "13.08.2021",
                            "unit": "Dauerlauf",
                            "info": "mit schnellem Endspurt",
                            "extraInfo": "10",
                            "distance" : "29.5",
                            "pulse": ["0", "90", "0", "10"]
                        },
                        {
                            "dayNo": 6,
                            "day" : "Samstag",
                            "date" : "14.08.2021",
                            "unit": "Regenerationslauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "13.5",
                            "pulse": ["100", "0", "0", "0"]
                        },
                        {
                            "dayNo": 7,
                            "day" : "Sonntag",
                            "date" : "15.08.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "30",
                            "distance" : "35.0",
                            "pulse": ["0", "70", "30", "0"]
                        }
                    ]
                },
                {
                    "weekNum": 11,
                    "date": "16.08 - 22.08",
                    "days": [
                        {
                            "dayNo": 1,
                            "day" : "Montag",
                            "date" : "16.08.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 2,
                            "day" : "Dienstag",
                            "date" : "17.08.2021",
                            "unit": "Extensive Intervalle",
                            "info": "5 Wiederholungen",
                            "extraInfo": "null",
                            "distance" : "19.0",
                            "pulse": ["20", "0", "30", "50"]
                        },
                        {
                            "dayNo": 3,
                            "day" : "Mittwoch",
                            "date" : "18.08.2021",
                            "unit": "Fahrtspiel",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "13.0",
                            "pulse": ["25", "25", "25", "25"]
                        },
                        {
                            "dayNo": 4,
                            "day" : "Donnerstag",
                            "date" : "19.08.2021",
                            "unit": "Dauerlauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "25.0",
                            "pulse": ["0", "100", "0", "0"]
                        },
                        {
                            "dayNo": 5,
                            "day" : "Freitag",
                            "date" : "20.08.2021",
                            "unit": "Dauerlauf",
                            "info": "mit schnellem Endspurt",
                            "extraInfo": "20",
                            "distance" : "9.5",
                            "pulse": ["0", "80", "0", "20"]
                        },
                        {
                            "dayNo": 6,
                            "day" : "Samstag",
                            "date" : "21.08.2021",
                            "unit": "Dauerlauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "30.5",
                            "pulse": ["0", "100", "0", "0"]
                        },
                        {
                            "dayNo": 7,
                            "day" : "Sonntag",
                            "date" : "22.08.2021",
                            "unit": "Dauerlauf",
                            "info": "mit moderatem Endspurt",
                            "extraInfo": "30",
                            "distance" : "19.5",
                            "pulse": ["0", "70", "30", "0"]
                        }
                    ]
                },
                {
                    "weekNum": 12,
                    "date": "23.08 - 29.08",
                    "days": [
                        {
                            "dayNo": 1,
                            "day" : "Montag",
                            "date" : "23.08.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 2,
                            "day" : "Dienstag",
                            "date" : "24.08.2021",
                            "unit": "Dauerlauf",
                            "info": "mit schnellem Endspurt",
                            "extraInfo": "10",
                            "distance" : "14.0",
                            "pulse": ["0", "90", "0", "10"]
                        },
                        {
                            "dayNo": 3,
                            "day" : "Mittwoch",
                            "date" : "25.08.2021",
                            "unit": "Regenerationslauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "10.0",
                            "pulse": ["100", "0", "0", "0"]
                        },
                        {
                            "dayNo": 4,
                            "day" : "Donnerstag",
                            "date" : "26.08.2021",
                            "unit": "Regenerationslauf",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "25.0",
                            "pulse": ["100", "0", "0", "0"]
                        },
                        {
                            "dayNo": 5,
                            "day" : "Freitag",
                            "date" : "27.08.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 6,
                            "day" : "Samstag",
                            "date" : "28.08.2021",
                            "unit": "Regeneration",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "null",
                            "pulse": "null"
                        },
                        {
                            "dayNo": 7,
                            "day" : "Sonntag",
                            "date" : "29.08.2021",
                            "unit": "Marathon",
                            "info": "null",
                            "extraInfo": "null",
                            "distance" : "42.2",
                            "pulse": ["0", "0", "20", "80"]
                        }
                    ]
                }
            ]
        }
        ,
        [
            {
                "name": "Dauerlauf",
                "text": "Dauerlauf",
                "info": "Beim Dauerlauf läufst du eine längere Strecke in einem gleichmäßigen Tempo. Durch den Dauerlauf verbessert dein Körper die Fähigkeit Sauerstoff aufzunehmen, wodurch sich deine Ausdauer steigert. Achte hierbei das du den Pulsbereich einhältst."
            },
            {
                "name": "Moderater Endspurt",
                "text": "mit moderatem Endspurt",
                "info": "Der letzte Teil der Strecke wird in einem höheren Pulsbereich absolviert. Der Anteil der Gesamtstrecke welcher, im höheren Bereich absolviert werden soll, kannst du den Pulsbereichen entnehmen."
            },
            {
                "name": "Schneller Endspurt",
                "text": "mit schnellem Endspurt",
                "info": "Der letzte Teil der Strecke wird im höchsten Pulsbereich absolviert. Der Anteil der Gesamtstrecke, welcher im höchsten Bereich absolviert werden soll, kannst du den Pulsbereichen entnehmen."
            },
            {
                "name": "Regeneration",
                "text": "Regeneration",
                "info": "Natürlich ist es wichtig zu trainieren, um voranzukommen. Aber genauso wichtig ist es auch mal eine Pause einzulegen damit der Körper sich vom Training erholen kann."
            },
            {
                "name": "Regenerationslauf",
                "text": "Regenerationslauf",
                "info": "Mit dem Regenerationslauf kann sich der Körper erholen und gleichzeitig werden bessere Voraussetzungen für das weitere Training geschaffen. Achte auf einen Puls im niedrigen Bereich, um dich nicht zu sehr zu belasten."
            },
            {
                "name": "Wechsellauf",
                "text": "Wechsellauf",
                "info": "Wechsle regelmäßig dein Lauftempo. Halte hierbei deine Pulszonen ein. Werde aber nicht zu schnell oder zu langsam. Diese Übung eignet sich, um dein Tempo zu trainieren."
            },
            {
                "name": "Extensive Intervalle",
                "text": "Extensive Intervalle",
                "info": "Hierbei wird die Ausdauer verbessert. Laufe in deinem angestrebten Wettkampftempo und versuche die Pulszonen einzuhalten. Zwischen den Intervallen sollen Trabpausen gemacht werden, damit dein Puls in die untere Zone sinken kann. Die Anzahl der Wiederholungen ist in der Beschreibung angegeben."
            },
            {
                "name": "Fahrtspiel",
                "text": "Fahrtspiel",
                "info": "Wechsle häufig dein Lauftempo. Variiere zwischen allen Pulszonen. Intensive Laufphasen dürfen nie zu lange am Stück sein. Gleiche intensive Laufphasen mit Trabpausen aus, um dich zu erholen. Das Fahrtspiel trainiert die Aufrechterhaltung eines hohen Tempos über eine längere Zeit."
            },
            {
                "name": "Halbmarathon",
                "text": "Halbmarathon",
                "info": "Laufe einen Halbmarathon um die Belastung unter Wettkampfbedingungen zu testen. Dies dient der Verbesserung deiner physischen und psychischen Belastbarkeit."
            },
            {
                "name": "Marathon",
                "text": "Marathon",
                "info": "Der große Tag ist da. Sei ausgeruht. Dein Marathonlauf steht endlich bevor. VIEL GLÜCK!"
            }
        ],
        [
            {
                "name": "ReKom",
                "min": 100,
                "max": 120
            },
            {
                "name": "GA1",
                "min": 120,
                "max": 140
            },
            {
                "name": "GA2",
                "min": 140,
                "max": 160
            },
            {
                "name": "WSA",
                "min": 160,
                "max": 180
            }
        ]
    ]
    return planData
}

module.exports = router;