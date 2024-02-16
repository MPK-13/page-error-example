//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/declaration', function(req, res) {

    //look to see if the validation checkbox has been ticked
 
    if(req.session.data['declaration']){
        //If the box has been checked then the declaration session will exist   
        req.session.data['page_error'] = 'false'; // this just cancels the session variable below so we can use it again in another page if needed
        res.redirect("/confirmation"); // redirects to the confirmation page
    }
    else{
        //if it hasn't been checked we create a session variable to use to seitch on the error
        req.session.data['page_error'] = 'true';
        //we then load the same page but this time the in-page logic will detect the session variable above
        res.redirect("/declaration");
    }
 })