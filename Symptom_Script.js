var app = new Vue({
	el: '#app',
	data: {
        symptomsData: [
			{
				texts: "Persistent dry cough",
                point: 3,
                checked: false

			},
			{
				texts: "Fever greater than 100",
                point: 4,
                checked: false
			}
        ],
        
        checkedSymptoms: [

        ],

        selectedSymptoms: ""
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

