//Initially jsPDF library shoud import/embed to your source file 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.debug.js"></script>

<script>
    function openpdf() {
        // define new object fron jsPDF and assign it to variable
        var pdfdoc = new jsPDF('p', 'pt', 'letter');
        // source can be HTML-formatted string, or a reference
        // to an actual DOM element from which the text will be scraped
        // the source content DivID is '#displaybox'
        source = $('#displaybox')[0];
  
        // we support special element handlers. Register them with jQuery-style 
        // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
        // There is no support for any other type of selectors 
        // (class, of compound) at this time.
        var specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#displaybox': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true;
            }
        };
        // define margines seperately
        margins = {
                top: 80,
                bottom: 60,
                left: 40,
                width: 522
            };
            
        // all coords and widths are in jsPDF instance's declared units
        // 'inches' in this case
        pdfdoc.fromHTML(
            source, // HTML string or DOM element reference
            margins.left, // x coord
            margins.top, { // y coord
                'width': margins.width, // max width of content on PDF
                'elementHandlers': specialElementHandlers
            },
             function (dispose) {
                // dispose: object with X, Y of the last line add to the PDF 
                // this allow the insertion of new lines after html
                pdfdoc.save('Test.pdf');
            }, margins
        );
    }
 </script>
