jQuery(document).ready( function() {
    // Restrict the special characters in the IBAN field
    jQuery('#nn_sepa_iban').on('input',function ( event ) {
        let iban = jQuery(this).val().replace( /[^a-zA-Z0-9]+/g, "" ).replace( /\s+/g, "" );
        jQuery(this).val(iban);
    });
     // Validate the BIC when if it is mandatory
       var bic = jQuery('#nn_sepa_bic').val().substring(0,2);
       if (bic.match(/(?:CH|MC|SM|GB)$/)) {
         jQuery('#nn_sepa_bic').prop('required', true);
       } else {
           jQuery('#nn_sepa_bic').prop('required', false);
       }
    // After the form submission disable the action
    jQuery('#novalnet_form').on('submit',function() {
       jQuery('#novalnet_form_btn').prop('disabled', true);
       if(jQuery('#nn_show_birthday').val() == true && (jQuery("#nn_guarantee_year").val() == '' || jQuery("#nn_guarantee_date").val() == '' || jQuery("#nn_guarantee_month").val() == '0')) {
           jQuery('#novalnet_form_btn').prop('disabled', false);
       }
    });
});
