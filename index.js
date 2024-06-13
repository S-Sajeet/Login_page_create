const wrapper = document.querySelector('.wrapper');
const reg_rmv = document.querySelector('.register_link');
const log_rmv = document.querySelector('.login_link');
const Login_popup = document.querySelector('.btnLogin_popup');
const cros_icon = document.querySelector('.icon_close');



reg_rmv.addEventListener('click', ( ) => {
    wrapper.classList.add("active");
    wrapper.classList.remove("active_Log");
});



log_rmv.addEventListener('click', ( ) => {
    wrapper.classList.remove("active");
    wrapper.classList.add("active_Log");
});


Login_popup.addEventListener('click', () => {
    wrapper.classList.add("Login_popup_show");
    Login_popup.style.opacity = "0";

});


cros_icon.addEventListener('click', () => {
    wrapper.classList.remove("Login_popup_show");
    Login_popup.style.opacity = "1";


})

  