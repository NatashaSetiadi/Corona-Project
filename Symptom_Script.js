var app = new Vue({
	el: '#app',
	data: {
        symptomsData: [
			{
				texts: "Persistent dry cough",
                point: [{
                    covid19: 20,
                    cold: 15,
                    flu: 20 
                }
                ],
                checked: false

            },
			{
				texts: "Fever",
                point: [
                {
                    covid19: 20,
                    cold: 5,
                    flu: 20
                }
                ],
                checked: false
            },

            {
                texts: "Fatigue",
                point: [
                {
                    covid19: 10,
                    cold: 10,
                    flu: 15
                }
                ],
                checked: false
            },

            {
                texts: "Muscle or body aches",
                point: [
                {
                    covid19: 10,
                    cold: 15,
                    flu: 20
                }
                ],
                checked: false
            },

            {
                texts: "Headache",
                point: [
                    {
                        covid19: 10,
                        cold: 5,
                        flu: 20
                    }
                    ],
                checked: false
            },
            
            {
                texts: "Loss of taste or smell",
                point: [
                    {
                        covid19: 10,
                        cold: 20,
                        flu: 20
                    }
                    ],
                checked: false
            },
            
            {
                texts: "Sore throat",
                point: [
                    {
                        covid19: 10,
                        cold: 20,
                        flu: 10
                    }
                    ],
                checked: false
            },
            
            {
                texts: "Congestion or runny nose",
                point: [
                    {
                        covid19: 5,
                        cold: 20,
                        flu: 10
                    }
                    ],
                checked: false
            },
            
            {
                texts: "Nausea or vomiting",
                point: [
                    {
                        covid19: 5,
                        cold: 0,
                        flu: 0
                    }
                    ],
                checked: false
            }, 
            {
                texts: "Sneezing",
                point: [
                    {
                        covid19: 0,
                        cold: 20,
                        flu: 10
                    }
                    ],
                checked: false
            },
            
            {
                texts: "Diarrhea",
                point: [
                    {
                        covid19: 5,
                        cold: 0,
                        flu: 0
                    }
                    ],
                checked: false
            },
            {
                texts: "Chills, repeated shaking",
                point: [
                {
                    covid19: 10,
                    cold: 5,
                    flu: 20
                }
                ],
                checked: false
            },
            {
                texts: "Swollen toes",
                point: [
                {
                    covid19: 5,
                    cold: 0,
                    flu: 0
                }
                ],
                checked: false
            },
            {
                texts: "Shortness of breath or difficulty breathing",
                point: [
                {
                    covid19: 10,
                    cold: 0,
                    flu: 0
                }
                ],
                checked: false
            },

            {
                texts: "Persistent pain or pressure in the chest *",
                point: [
                {
                    covid19: 20,
                    cold: 0,
                    flu: 0
                }
                ],
                checked: false
            },
            
            {
                texts: "New confusion *",
                point: [
                    {
                        covid19: 10,
                        cold: 10,
                        flu: 15
                    }
                    ],
                checked: false
            },
            
            {
                texts: "Inability to wake or stay awake *",
                point: [
                    {
                        covid19:10,
                        cold: 10,
                        flu: 10
                    }
                    ],
                checked: false
            },
            
            
            {
                texts: "Bluish lips or face *",
                point: [
                    {
                        covid19: 15,
                        cold: 0,
                        flu: 0
                    }
                    ],
                checked: false
            }
        ],
        
        checkedSymptoms: [

        ],

        selectedSymptoms: "",

        otherSymptoms: "",

        selectedCategory: 1,
        result: "",
        percentage: null,
        
        hasAnyVirus: false
    },
    computed: {
        totalSelected: function(){
            total = ""
            for(var i in this.checkedSymptoms)
            {
                total += this.checkedSymptoms[i].texts + ", "
            }
            return total
        },

        countCovid: function(){
            total = 0;
            for(var i in this.checkedSymptoms)
            {
                total = total + this.checkedSymptoms[i].point[0].covid19;
            }
            return total
        },

        countCold: function(){
            total = 0;
            for(var i in this.checkedSymptoms)
            {
                total = total + this.checkedSymptoms[i].point[0].cold;
            }
            return total
        },

        countFlu: function(){
            total = 0;
            for(var i in this.checkedSymptoms)
            {
                total = total + this.checkedSymptoms[i].point[0].flu;
            }
            return total
        }
    },
    methods: {
        calculateSymptoms: function(event)
        {
            covid19total = this.countCovid;
            covid19total *= this.selectedCategory; //adds in the location factor

            //total from symptoms
            coldtotal = this.countCold;
            flutotal = this.countFlu;

            //extra COVID19 symptoms that are less common
            if(this.otherSymptoms.includes("tired"))
            {
                covid19total +=5;
            }

            if(this.otherSymptoms.includes("rash")) 
            {
                covid19total +=5;
            }

            if(this.otherSymptoms.includes("weak"))
            {
                covid19total +=5;
            }

            if(this.otherSymptoms.includes("dizzy"))
            {
                covid19total +=5;
            }
            
            //divides by total possible points
            covid19total = covid19total / 1435;
            coldtotal = coldtotal / 155;
            flutotal =  flutotal/190;

             /*
            console.log("COVID: " + covid19total);
            console.log("Cold: " + coldtotal);
            console.log("Flu: " + flutotal); */

            var totals = [];
            totals.push(covid19total);
            totals.push(coldtotal);
            totals.push(flutotal);

            //finds maximum value
            max = covid19total;
            maxIndex= 0
            for (var i = 1; i < totals.length; i++) 
            {
                if(totals[i] > max)
                {
                    max = totals[i];
                    maxIndex = i;
                }
            }

            //makes sure that all totals are greater than 0
            var NoneGreaterThanZero = true;
            for (var j = 0; j < totals.length; j++) 
            {
                if(totals[j] > 0)
                {
                    NoneGreaterThanZero = false;
                    break;
                }
            }

         
            if(NoneGreaterThanZero == false)
            {
                if(maxIndex == 0)
                {
                    this.result= "You most likely have COVID19";
                    this.percentage = totals[0] * 100;
                    this.percentage = this.percentage.toFixed(2);
                    this.hasAnyVirus = true;
                }

                if(maxIndex == 1)
                {
                    this.result= "You most likely have the cold";
                    this.percentage = totals[1] * 100;
                    this.percentage = this.percentage.toFixed(2);
                    this.hasAnyVirus = true;
                }

                if(maxIndex == 2)
                {
                    this.result= "You most likely have the flu";
                    this.percentage = totals[2] * 100;
                    this.percentage = this.percentage.toFixed(2);
                    this.hasAnyVirus = true;
                }
            }

            else
            {
                this.result= "You most likely do not have either COVID19, the cold, or the flu"
            }




        },
          
          printValues: function()
          {
            this.selectedSymptoms = "";
            // Read Checked checkboxes value
            for (var key in this.checkedSymptoms) 
            {
               this.selectedSymptoms += this.checkedSymptoms[key]+", "; 
            }
          } 
          
        }
})

//I added this here as for some reason the mobile view only works if I put this code in your file rather than in a script tag
$("#toggle").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});
$("#resize ul li a").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});
$(".close-btn").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});