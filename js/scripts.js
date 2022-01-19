/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function validate()
{
	if( document.myForm.personname.value == "" )
	{
		alert( "Please provide your name!" );
		document.myForm.personname.focus() ; 
		return false;
	}
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.co.in$/;

	if( document.myForm.EMail.value == ""  || reg.test(document.myForm.EMail.value) == false)
	{
		alert( "Please provide Email in name@domain.co.in format!" ); 
		document.myForm.EMail.focus() ;
		return false;
	}
	if( document.myForm.username.value !="admin" )
	{
		alert( "Invalid user!" );
		document.myForm.username.focus() ;
		return false;
	}
	
    if( document.myForm.Mob.value == "" ||
	isNaN( document.myForm.Mob.value ) ||
	document.myForm.Mob.value.length != 10 ) 
	{
		alert( "Please provide valid mobile number of length 10" );
		document.myForm.Mob.focus() ;
		return false;
	}
	
	if( document.myForm.Address.value == "")
	{
		alert( "Please dont leave Address as blank" );
		document.myForm.Address.focus() ;
		return false; 
	}
	if( document.myForm.Zip.value == "" ||
	isNaN( document.myForm.Zip.value ) ||
	document.myForm.Zip.value.length != 6 )
	{ 
		alert( "Please provide a zip in the format 123456." );
		document.myForm.Zip.focus() ;
		return false;
	}
	
	if( document.myForm.password.value !="admin" )
	{
		alert( "Invalid Password!" );
		document.myForm.password.focus() ;
		return false;
	}
	
	if( document.myForm.repassword.value !="admin" )
	{
		alert( "Invalid Password!" );
		document.myForm.repassword.focus() ;
		return false;
	}

	return( true );
}