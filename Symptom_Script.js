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