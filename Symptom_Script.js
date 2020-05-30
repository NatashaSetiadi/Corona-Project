var app = new Vue({
	el: '#app',
	data: {
        symptomsData: [
			{
				texts: "Persistent dry cough",
                point: 0,
                checked: false

            },

            {
                texts: "Persistent wet cough",
                point: 0,
                checked: false
            },

			{
				texts: "Fever greater than 100 F",
                point: 0,
                checked: false
            },

            {
                texts: "Fatigue",
                point: 0,
                checked: false
            },

            {
                texts: "Shortness of breath or difficulty breathing",
                point: 0,
                checked: false
            },

            {
                texts: "Muscle or body aches",
                point: 0,
                checked: false
            },

            {
                texts: "Headache",
                point: 0,
                checked: false
            },
            
            {
                texts: "New loss of taste or smell",
                point: 0,
                checked: false
            },
            
            {
                texts: "Sore throat",
                point: 0,
                checked: false
            },
            
            {
                texts: "Congestion or runny nose",
                point: 0,
                checked: false
            },
            
            {
                texts: "Nausea or vomiting",
                point: 0,
                checked: false
            },
            
            {
                texts: "Diarrhea",
                point: 0,
                checked: false
            },
            
            {
                texts: "Trouble breathing *",
                point: 0,
                checked: false
            },
            
            {
                texts: "Persistent pain or pressure in the chest *",
                point: 0,
                checked: false
            },
            
            {
                texts: "New confusion *",
                point: 0,
                checked: false
            },
            
            {
                texts: "Inability to wake or stay awake *",
                point: 0,
                checked: false
            },
            
            {
                texts: "Bluish lips or face *",
                point: 0,
                checked: false
            }
        ],
        
        checkedSymptoms: [

        ],

        selectedSymptoms: "",

        otherSymptoms: ""
    },
    computed: {
        totalSelected: function(){
            total = ""
            for(var i in this.checkedSymptoms)
            {
                total += this.checkedSymptoms[i].texts + ", "
            }
            return total
        }
    },
    methods: {
        
          /* Keep for checking if the checkboxes work 
          printValues: function()
          {
            this.selectedSymptoms = "";
            // Read Checked checkboxes value
            for (var key in this.checkedSymptoms) 
            {
               this.selectedSymptoms += this.checkedSymptoms[key]+", "; 
            }
          } 
          */
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