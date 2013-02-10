/**
 * HTML5 Drag & Drop with data types
 */
$(document).ready(function() {

    // Set up the drop zone.
    $('#data_transfer .drophere')

        // Update the drop zone class on drag enter/leave
        .bind('dragenter', function(ev) {
            $(ev.target).addClass('dragover');
            return false;
        })
        .bind('dragleave', function(ev) {
            $(ev.target).removeClass('dragover');
            return false;
        })

        // Allow drops of any kind into the zone.
        .bind('dragover', function(ev) {
            return false;
        })

        // Handle the final drop...
        .bind('drop', function(ev) {
            //var dt = ev.originalEvent.dataTransfer;
            ev.preventDefault();
            var file = ev.originalEvent.dataTransfer.files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
              console.log(event.target);
            };
            reader.readAsDataURL(file);
            puzzle.src = URL.createObjectURL(file);
            $(ev.target).removeClass('dragover');
            ev.stopPropagation();
            return false;            
        });
});
