(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sanath/Downloads/apna-pharmacy/product-webapp/webapp/src/main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Service_user_registration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Service/user-registration */ "KVIW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Service_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/register.service */ "c/nc");
/* harmony import */ var _Header_for_login_register_login_header_login_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Header-for-login-register/login-header/login-header.component */ "P2sg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Header&Footer/f-all/f-all.component */ "kTK9");











function RegisterComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required in proper format");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a password of minimum 5 digits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a password of minimum 5 digits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password mismatched ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(route, router, formbuilder, registerService) {
        this.route = route;
        this.router = router;
        this.formbuilder = formbuilder;
        this.registerService = registerService;
        this.user = new _Service_user_registration__WEBPACK_IMPORTED_MODULE_3__["UserRegistration"]();
        this.registerForm = this.formbuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            Confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
        }, { validators: this.Mustmatch('password', 'Confirmpassword') });
    }
    ngOnInit() {
    }
    registerNow() {
        console.log(this.registerForm.get("name"));
        console.log(this.registerForm.get("username"));
        console.log(this.registerForm.get("password"));
        console.log(this.registerForm.get("Confirmpassword"));
        this.registerService.registerApi(this.user).subscribe((data) => {
            console.log("The registration form has been submitted with these objects" + data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Registration is Successful", "You are registered Successfully!", "success");
            this.router.navigate(["/login"]);
        }, (error) => {
            alert("exception occured");
        });
    }
    get f() {
        return this.registerForm.controls;
    }
    Mustmatch(password, Confirmpassword) {
        return (formGroup) => {
            const passwordcontrol = formGroup.controls[password];
            const conpasswordcontrol = formGroup.controls[Confirmpassword];
            if (conpasswordcontrol.errors && !conpasswordcontrol.errors['Mustmatch']) {
                return;
            }
            if (passwordcontrol.value !== conpasswordcontrol.value) {
                conpasswordcontrol.setErrors({ Mustmatch: true });
            }
            else {
                conpasswordcontrol.setErrors(null);
            }
        };
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Service_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 48, vars: 12, consts: [["id", "bgcolor", 1, "p-3", "bg-light", "text-dark"], [1, "page"], [1, "container"], [1, "row"], [1, "col-8"], ["src", ".\\assets\\img-pr\\medicine3.png", "width", "80%", "height", "90", "alt", "Loading..", 1, "img-fluid"], [1, "col-4"], [1, "font-weight-bold", "py-3", 2, "text-align", "center"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "mb-3"], ["for", "fname"], ["type", "text", "placeholder", "Enter your name", "formControlName", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "text-danger", 4, "ngIf"], ["for", "email"], ["type", "email", "placeholder", "Enter your email", "formControlName", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "pwd"], ["type", "password", "placeholder", "Enter your password", "formControlName", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "pw"], ["type", "password", "placeholder", "Retype your password", "formControlName", "Confirmpassword", 1, "form-control"], [1, "col-lg-7"], ["type", "submit", 1, "btn1", "mt-2", "mb-5"], [2, "text-align", "center"], ["routerLink", "/login"], [1, "text-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_10_listener() { return ctx.registerNow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) { return ctx.user.fullName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterComponent_span_16_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_21_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterComponent_span_22_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegisterComponent_span_23_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_28_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegisterComponent_span_29_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RegisterComponent_span_30_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegisterComponent_span_36_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RegisterComponent_span_37_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RegisterComponent_span_38_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Login here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-f-all");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f["name"].getError("required") != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f["username"].getError("required") != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f["username"].getError("email") != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f["password"].getError("required") != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f["password"].getError("minlength") != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f["Confirmpassword"].getError("required") != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f["Confirmpassword"].getError("minlength") != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f["Confirmpassword"].getError("Mustmatch") != null);
    } }, directives: [_Header_for_login_register_login_header_login_header_component__WEBPACK_IMPORTED_MODULE_6__["LoginHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_8__["FAllComponent"]], styles: ["#bgcolor[_ngcontent-%COMP%]{\n    height: 770px;  \n   \n}     \n\n\n\n.page[_ngcontent-%COMP%]{\n background-color: white;\n margin-top: 30px;\n border-radius : 30px;\n justify-content: center;\n padding-left: 0px;\n padding-right: 50px;\n width: 75%;\n margin-left: 160px;\n }     \n\n\n\n.col[_ngcontent-%COMP%]{\njustify-content: center;\npadding: 0%;\n\n}     \n\n\n\n.btn1[_ngcontent-%COMP%]{\n border: none;\n outline: none;\n height: 40px;\n width: 50%;\n background-color: rgb(69, 25, 230);\n color: white;\n border-radius: 4px;\n font-weight: bold;\n margin-left: 110px;\n padding-bottom: 0px;}     \n\n\n\nimg[_ngcontent-%COMP%]{\n     border-top-left-radius: 30px;\n     border-bottom-left-radius: 30px;\n     margin-top: 30px;\n     margin-left: 60px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBO0lBQ0ksYUFBYTs7QUFFakI7Ozs7QUFJQTtDQUNDLHVCQUF1QjtDQUN2QixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCLHVCQUF1QjtDQUN2QixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEI7Ozs7QUFTRDtBQUNBLHVCQUF1QjtBQUN2QixXQUFXOztBQUVYOzs7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLFlBQVk7Q0FDWixVQUFVO0NBQ1Ysa0NBQWtDO0NBQ2xDLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixtQkFBbUIsQ0FBQzs7OztBQUdwQjtLQUNJLDRCQUE0QjtLQUM1QiwrQkFBK0I7S0FDL0IsZ0JBQWdCO0tBQ2hCLGlCQUFpQjtDQUNyQiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG4jYmdjb2xvcntcbiAgICBoZWlnaHQ6IDc3MHB4OyAgXG4gICBcbn0gICAgIFxuXG5cblxuLnBhZ2V7XG4gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gbWFyZ2luLXRvcDogMzBweDtcbiBib3JkZXItcmFkaXVzIDogMzBweDtcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiBwYWRkaW5nLWxlZnQ6IDBweDtcbiBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuIHdpZHRoOiA3NSU7XG4gbWFyZ2luLWxlZnQ6IDE2MHB4O1xuIH1cbiBcbiBcbiBcblxuXG5cblxuXG4uY29se1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5wYWRkaW5nOiAwJTtcblxufVxuXG4uYnRuMXtcbiBib3JkZXI6IG5vbmU7XG4gb3V0bGluZTogbm9uZTtcbiBoZWlnaHQ6IDQwcHg7XG4gd2lkdGg6IDUwJTtcbiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDI1LCAyMzApO1xuIGNvbG9yOiB3aGl0ZTtcbiBib3JkZXItcmFkaXVzOiA0cHg7XG4gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gbWFyZ2luLWxlZnQ6IDExMHB4O1xuIHBhZGRpbmctYm90dG9tOiAwcHg7fVxuXG5cbiBpbWd7XG4gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuIH1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _Service_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"] }]; }, null); })();


/***/ }),

/***/ "2Jhi":
/*!****************************************************************************!*\
  !*** ./src/app/Medicine-order-ui/order-home-ui/order-home-ui.component.ts ***!
  \****************************************************************************/
/*! exports provided: OrderHomeUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHomeUiComponent", function() { return OrderHomeUiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Header_Footer_h_all_h_all_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Header&Footer/h-all/h-all.component */ "OKSz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Header&Footer/f-all/f-all.component */ "kTK9");








class OrderHomeUiComponent {
    constructor() { }
    ngOnInit() {
    }
}
OrderHomeUiComponent.ɵfac = function OrderHomeUiComponent_Factory(t) { return new (t || OrderHomeUiComponent)(); };
OrderHomeUiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderHomeUiComponent, selectors: [["app-order-home-ui"]], decls: 115, vars: 0, consts: [[1, "offers", 2, "text-align", "left"], [2, "height", "10px"], ["role", "search", 1, "d-flex", 2, "width", "30%", "margin-left", "1010px", "margin-top", "20px"], ["type", "search", "placeholder", "Search in orders", "aria-label", "Search", 1, "form-control", "me-2"], ["type", "submit", 1, "btn", "btn-outline-success"], [1, "whole-card-bg"], [1, "mat-elevation-z3", "mb-2"], ["mat-card-avatar", "", 1, "header-image"], [1, "inside-card-bg"], [1, "row"], [1, "col-3"], ["src", "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/4/9/490020520_2.jpg", "width", "100px;", "height", "100px;"], [1, "col-9", "mt-2"], [1, "divider-1", "mt-2"], [1, "rating"], [1, "active"], ["src", "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/p/a/pan1166_1_1_1.jpg", "width", "100px;", "height", "100px;"], ["src", "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/b/1/b12.jpg", "width", "100px;", "height", "100px;"]], template: function OrderHomeUiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-h-all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Deliverd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "On Tue, 14 Jun 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Dabur Chywanprash awaleha Large, 950gm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "On Tue, 14 Jun 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Quantity: 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-divider", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "* Exchange/Return window closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Deliverd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "On Mon, 13 Feb 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Zandu Pachrista Ayurvedic Digestive Syrup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "On Mon, 13 Feb 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Quantity: 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "mat-divider", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "* Exchange/Return window closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Deliverd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "On Wed, 15 Sep 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Himalayan Organics Plant Based Vitamin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "On Wed, 15 Sep 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Quantity: 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "mat-divider", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "* Exchange/Return window closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "app-f-all");
    } }, directives: [_Header_Footer_h_all_h_all_component__WEBPACK_IMPORTED_MODULE_1__["HAllComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_6__["FAllComponent"]], styles: [".whole-card-bg[_ngcontent-%COMP%]{\n    background-color: rgb(228, 236, 241);\n    padding: 20px;\n}\n\n\n\n.header-image[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/img-pr/apna-pharmacy.jpg\");\n    background-size: cover;\n  }\n\n\n\n.inside-card-bg[_ngcontent-%COMP%]{\n    background-color: rgb(230, 231, 231);\n  }\n\n\n\n.mat-divider[_ngcontent-%COMP%]{\n    border-top-color: white;\n  }\n\n\n\n.col-2[_ngcontent-%COMP%]{\n    padding: 0px;\n  }\n\n\n\n.offers[_ngcontent-%COMP%] {\n    \n    \n    height: 100px;\n    background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpsyluJKA7Q557c4jRCyqxlTUbP3Km0R4IBhBF3plBQ&s\");\n    \n}\n\n\n\n.active[_ngcontent-%COMP%]{\n    color:orange;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWhvbWUtdWkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtBQUNqQjs7OztBQUlBO0lBQ0kseURBQXlEO0lBQ3pELHNCQUFzQjtFQUN4Qjs7OztBQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDOzs7O0FBRUE7SUFDRSx1QkFBdUI7RUFDekI7Ozs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7OztBQUVBOzs7SUFHRSxhQUFhO0lBQ2IsNkhBQTZIOztBQUVqSTs7OztBQUdFO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6Im9yZGVyLWhvbWUtdWkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLndob2xlLWNhcmQtYmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjM2LCAyNDEpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cblxuXG4uaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy1wci9hcG5hLXBoYXJtYWN5LmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgLmluc2lkZS1jYXJkLWJne1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMSwgMjMxKTtcbiAgfVxuXG4gIC5tYXQtZGl2aWRlcntcbiAgICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5jb2wtMntcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAub2ZmZXJzIHtcbiAgICBcbiAgICBcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1J3cHN5bHVKS0E3UTU1N2M0alJDeXF4bFRVYlAzS20wUjRJQmhCRjNwbEJRJnNcIik7XG4gICAgXG59XG5cblxuICAuYWN0aXZle1xuICAgIGNvbG9yOm9yYW5nZTtcbiAgfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderHomeUiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-home-ui',
                templateUrl: './order-home-ui.component.html',
                styleUrls: ['./order-home-ui.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5hKM":
/*!**********************************************************!*\
  !*** ./src/app/Service/buyer-product-service.service.ts ***!
  \**********************************************************/
/*! exports provided: BuyerProductServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerProductServiceService", function() { return BuyerProductServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class BuyerProductServiceService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://apnapharmacy.stackroute.io";
    }
    getAllProduct() {
        return this.http.get(this.baseUrl + "/product-service/product/products");
    }
    getProductById(productId) {
        return this.http.get(this.baseUrl + "/product-service/product/" + productId);
    }
}
BuyerProductServiceService.ɵfac = function BuyerProductServiceService_Factory(t) { return new (t || BuyerProductServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BuyerProductServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BuyerProductServiceService, factory: BuyerProductServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyerProductServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BcYC":
/*!*************************************************************!*\
  !*** ./src/app/SellerUI/my-profile/my-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_Service_seller_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/seller-service.service */ "TJLO");




class MyProfileComponent {
    constructor(service) {
        this.service = service;
        this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            shopAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sellerEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            shopName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            shopDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ngOnInit() {
        this.service.getProfile(localStorage.getItem("email")).subscribe((x) => {
            this.login.get("name").setValue(x.shop);
            console.log(x);
            this.login = x;
        });
    }
    submit(value) {
        console.log("Submitted", value);
        this.save();
    }
    onFileSelected(event) {
        const file = event.target.files[0];
        this.login.patchValue({ image: file });
        const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
        if (file && allowedMimeTypes.includes(file.type)) {
            const reader = new FileReader();
            reader.onload = () => {
                this.imageData = reader.result;
            };
            reader.readAsDataURL(file);
        }
    }
    get shopAddress() {
        return this.login.get('shopAddress');
    }
    get sellerEmail() {
        return this.login.get('sellerEmail');
    }
    get file() {
        return this.login.get('file');
    }
    get shopName() {
        return this.login.get('shopName');
    }
    get shopDescription() {
        return this.login.get('shopDescription');
    }
    save() {
        console.log("yes");
        var image = new FormData();
        var data = image.append('shop', JSON.stringify(this.login.value));
        console.log("no", data);
        this.service.update(image).subscribe(a => {
            console.log(a);
        });
    }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_seller_service_service__WEBPACK_IMPORTED_MODULE_2__["SellerServiceService"])); };
MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 0, vars: 0, template: function MyProfileComponent_Template(rf, ctx) { }, styles: ["@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css\");\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\");\n.f[_ngcontent-%COMP%]{\n    text-align: center;\n    border-bottom: 2px solid black;\n}\n#lock[_ngcontent-%COMP%]{\n    border: 0.5px solid black;\n    border-radius: 600px;\n    height: 175px;\n}\n#Des[_ngcontent-%COMP%]{\n    height: 175px;\n}\n.but[_ngcontent-%COMP%]{\n    margin-left: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRkFBc0Y7QUFDdEYsMkZBQTJGO0FBQzNGLHdGQUF3RjtBQUN4RjtJQUNJLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7Ozs7Ozs7O0dBUUciLCJmaWxlIjoibXktcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjIuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4yLjMvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzYuMi4wL2Nzcy9hbGwubWluLmNzc1wiKTtcbi5me1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG59XG4jbG9ja3tcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwMHB4O1xuICAgIGhlaWdodDogMTc1cHg7XG59XG4jRGVze1xuICAgIGhlaWdodDogMTc1cHg7XG59XG4uYnV0e1xuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XG59XG4vKiBpbnB1dDppbnZhbGlkIHtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgcmVkO1xuICB9XG5pbnB1dDppbnZhbGlkOnJlcXVpcmVkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHBpbmssIGxpZ2h0Z3JlZW4pO1xufVxuaW5wdXQubmctdmFsaWR7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjtcbn0gKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-profile',
                templateUrl: './my-profile.component.html',
                styleUrls: ['./my-profile.component.css']
            }]
    }], function () { return [{ type: src_app_Service_seller_service_service__WEBPACK_IMPORTED_MODULE_2__["SellerServiceService"] }]; }, null); })();


/***/ }),

/***/ "EyC3":
/*!**********************************************************************!*\
  !*** ./src/app/product-description/product-description.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDescriptionComponent", function() { return ProductDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Service_product_description_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/product-description.service */ "ZWJo");
/* harmony import */ var _Service_final_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Service/final-cart.service */ "KYHu");
/* harmony import */ var _Header_Footer_h_all_h_all_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header&Footer/h-all/h-all.component */ "OKSz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Header&Footer/f-all/f-all.component */ "kTK9");











class ProductDescriptionComponent {
    constructor(productDescriptionService, Cartservice) {
        this.productDescriptionService = productDescriptionService;
        this.Cartservice = Cartservice;
        this.productId = localStorage.getItem("productId");
        this.customerEmail = localStorage.getItem("email");
    }
    getProduct(productId) {
        this.productDescriptionService.getProduct(productId).subscribe(x => {
            this.productDetails = x;
            console.log(this.productDetails);
            this.image = 'data:image/jpg;base64,' + this.productDetails.productImage;
            console.log(this.image);
        });
    }
    ngOnInit() {
        this.getProduct(this.productId);
    }
    Addtocart() {
        var image = new FormData();
        image.append('customerEmail', JSON.parse(this.customerEmail));
        console.log(image, "customer email coming");
        image.append('productId', this.productId);
        console.log(image, "both appended");
        this.Cartservice.addItemToCart(image).subscribe((data) => {
            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Item is added to the cart!!");
        }, (error) => {
            console.log(error);
        });
    }
}
ProductDescriptionComponent.ɵfac = function ProductDescriptionComponent_Factory(t) { return new (t || ProductDescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Service_product_description_service__WEBPACK_IMPORTED_MODULE_2__["ProductDescriptionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Service_final_cart_service__WEBPACK_IMPORTED_MODULE_3__["FinalCartService"])); };
ProductDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDescriptionComponent, selectors: [["app-product-description"]], decls: 43, vars: 6, consts: [["color", "white", 2, "margin-top", "20px", "margin-left", "50px", "font-size", "30px", "color", "rgb(62, 48, 48)"], [1, "example-spacer"], [2, "padding-bottom", "30px", "padding-top", "50px"], [1, "container-fluid", 2, "display", "flex"], ["matRipple", "", 1, "mat-elevation-z9", 2, "width", "1000px", "height", "550px", "margin-right", "20px", "margin-left", "50px", "display", "flex"], ["height", "250px", 2, "justify-content", "center", "margin-top", "100px", "margin-left", "40px", 3, "src"], [1, "des", 2, "margin-left", "100px"], [2, "color", "rgb(3, 30, 71)", "margin-top", "50px"], ["mat-raised-button", "", "color", "disabled", 2, "color", "rgb(56, 147, 218)"], [1, "text-style"], [2, "color", "rgb(7, 62, 64)"], [1, "text-style-p"], [2, "color", "rgb(33, 50, 90)"], ["mat-raised-button", "", "color", "disabled"], ["matRipple", "", 1, "mat-elevation-z9", 2, "margin-left", "50px", "width", "350px", "height", "200px"], [1, "col-md-auto", 2, "position", "absolute"], [2, "color", "rgb(3, 30, 71)", "padding-left", "50px"], [2, "font-size", "13px", "margin-left", "50px"], [2, "padding-left", "25px"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "65px", 3, "click"]], template: function ProductDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-h-all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Product Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "P", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Expires on: 27th June 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Product Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Other information : Keep out of reach of children and store in a cool and dry place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Item not refundable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-title", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-title", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "(Inclusive of all taxes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-footer", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDescriptionComponent_Template_button_click_40_listener() { return ctx.Addtocart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Add To Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-f-all");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.productDetails.productName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" INR ", ctx.productDetails.productPrice, " (inclusive of all taxes) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Manufactured By: ", ctx.productDetails.productBrand, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.productDetails.productDescription, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Price : \u20B9 ", ctx.productDetails.productPrice, " ");
    } }, directives: [_Header_Footer_h_all_h_all_component__WEBPACK_IMPORTED_MODULE_4__["HAllComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_9__["FAllComponent"]], styles: [".p[_ngcontent-%COMP%]{\n\tbackground-image:url(/assets/images/backg.png);\n\n} \n \n.logo[_ngcontent-%COMP%]{\n\theight: 100px;\n} \n.button[_ngcontent-%COMP%]{\n\tfloat:right;\n\ttop:40%;\n\tleft:10%;\n\tbackground-color: rgb(223, 243, 243);\n} \n \n \n.description[_ngcontent-%COMP%]  {\n\t\t\n\t\t\n\t\t\n\t\tcolor:rgb(50, 50, 66);\n\t\tfont-size: large;\n\t\tborder: 2px solid rgb(143, 246, 102);\n\t\tborder-radius: 5px;\n\t\tfont-weight: 800;\n\t\twidth: 60%;\n\t\tpadding-right: 10%;\n\t} \n.medicinelogo[_ngcontent-%COMP%]{\n\t\tcolor: rgb(92, 92, 157);\n\t\tfont-weight: 700;\n\t\tborder: 1px solid rgb(58, 108, 146);\n\t\twidth: 60%;\n\t\t\n\t} \n.topnav[_ngcontent-%COMP%] {\n\t\tbackground-color: rgb(78, 141, 152);\n\t\toverflow: hidden;\n\t  } \n \n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\t\tfloat: left;\n\t\tcolor: #f2f2f2;\n\t\ttext-align: center;\n\t\tpadding: 14px 16px;\n\t\ttext-decoration: none;\n\t\tfont-size: 17px;\n\t  } \n \n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\t\tbackground-color: #ddd;\n\t\tcolor: rgb(7, 67, 109);\n\t  } \n \n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n\t\tbackground-color: #868f8b;\n\t\tcolor: white;\n\t  } \n \n.footer[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t\tflex-flow: row wrap;\n\t\tpadding: 30px 30px 20px 30px;\n\t\tcolor: #232222;\n\t\tbackground-color: #fff;\n\t\tborder-top: 1px solid #aa9c9c;\n\t  } \n.footer[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n\t\tflex:  1 100%;\n\t  } \n.footer__addr[_ngcontent-%COMP%] {\n\t\tmargin-right: 1.25em;\n\t\tmargin-bottom: 2em;\n\t  } \n.footer__logo[_ngcontent-%COMP%] {\n\t\tfont-family: 'Pacifico', cursive;\n\t\tfont-weight: 400;\n\t\ttext-transform: lowercase;\n\t\tfont-size: 1.5rem;\n\t  } \n.footer__addr[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n\t\tmargin-top: 1.3em;\n\t\tfont-size: 15px;\n\t\tfont-weight: 400;\n\t  } \n.nav__title[_ngcontent-%COMP%] {\n\t\tfont-weight: 400;\n\t\tfont-size: 15px;\n\t  } \n.footer[_ngcontent-%COMP%]   address[_ngcontent-%COMP%] {\n\t\tfont-style: normal;\n\t\tcolor: #999;\n\t  } \n.footer__btn[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\theight: 36px;\n\t\tmax-width: -moz-max-content;\n\t\tmax-width: max-content;\n\t\tbackground-color: rgb(33, 33, 33, 0.07);\n\t\tborder-radius: 100px;\n\t\tcolor: #2f2f2f;\n\t\tline-height: 0;\n\t\tmargin: 0.6em 0;\n\t\tfont-size: 1rem;\n\t\tpadding: 0 1.3em;\n\t  } \n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n\t\tlist-style: none;\n\t\tpadding-left: 0;\n\t  } \n.footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\t\tline-height: 2em;\n\t  } \n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\t\ttext-decoration: none;\n\t  } \n.footer__nav[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t\t  flex-flow: row wrap;\n\t  } \n.footer__nav[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n\t\tflex: 1 50%;\n\t\tmargin-right: 1.25em;\n\t  } \n.nav__ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\t\tcolor: #999;\n\t  } \n.nav__ul--extra[_ngcontent-%COMP%] {\n\t\t-moz-column-count: 2;\n\t\t     column-count: 2;\n\t\t-moz-column-gap: 1.25em;\n\t\t     column-gap: 1.25em;\n\t  } \n.legal[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tcolor: #999;\n\t  } \n.legal__links[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t  } \n.heart[_ngcontent-%COMP%] {\n\t\tcolor: #2f2f2f;\n\t  } \n@media screen and (min-width: 24.375em) {\n\t\t.legal[_ngcontent-%COMP%]   .legal__links[_ngcontent-%COMP%] {\n\t\t  margin-left: auto;\n\t\t}\n\t  } \n@media screen and (min-width: 40.375em) {\n\t\t.footer__nav[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n\t\t  flex: 1;\n\t\t}\n\t\t\n\t\t.nav__item--extra[_ngcontent-%COMP%] {\n\t\t  flex-grow: 2;\n\t\t}\n\t\t\n\t\t.footer__addr[_ngcontent-%COMP%] {\n\t\t  flex: 1 0px;\n\t\t}\n\t\t\n\t\t.footer__nav[_ngcontent-%COMP%] {\n\t\t  flex: 2 0px;\n\t\t}\n\t  } \n \n.example-card[_ngcontent-%COMP%] {\n\t\tmax-width: 400px;\n\t  } \n.example-header-image[_ngcontent-%COMP%] {\n\t\tbackground-image: url('/assets/images/carticon.jpg');\n\t\tbackground-size: cover;\n\t\t\n\t  } \n.meddesc[_ngcontent-%COMP%]{\n\t\tborder: 1px solid #f59504;\n\t\tfloat: right;\n\t\tvertical-align: middle;\n\t  } \n \n.header_pharmacy_logo[_ngcontent-%COMP%]{\n\t-o-object-fit: contain;\n\t   object-fit: contain;\n\twidth: 100px;\n\tmargin: 12px 20px 0px 2px;\n  } \n \n#searchfull[_ngcontent-%COMP%] {\n\twidth: 50%;\n\talign-content: center;\n  } \n.logoClass2[_ngcontent-%COMP%] {\n\theight: 4rem;\n\tposition: absolute;\n\tleft: 5px;\n\ttop :10px;\n  } \n#navBrand[_ngcontent-%COMP%] {\n\twidth: 10rem;\n\tposition: absolute;\n\tmargin-left: 33rem;\n\t\n  } \n#Features[_ngcontent-%COMP%] {\n\twidth: 35rem;\n\tposition: absolute;\n\tmargin-left: 65rem;\n\t\n\t\n  } \n.MyNav[_ngcontent-%COMP%] {\n\t\n\tbackground-color: aliceblue;\n  } \n.des[_ngcontent-%COMP%]{\n\tmargin-bottom: 1000px;;\n  } \nmat-card[_ngcontent-%COMP%]{\n\tborder-radius: 15px;\n  } \n.text-style[_ngcontent-%COMP%]{\n\tfont-family: sans-serif ;\n\tfont-size: 20px;\n\tfont-weight: 15px;\n\tcolor: #6e7572;\n  } \n.text-style-p[_ngcontent-%COMP%]{\n\tfont-size:20px;\n\tfont-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n\t\n  } \n.def[_ngcontent-%COMP%]{\n\tfont-size:2px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDhDQUE4Qzs7QUFFL0M7QUFDQTs7Ozs7OztHQU9HO0FBQ0g7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLFdBQVc7Q0FDWCxPQUFPO0NBQ1AsUUFBUTtDQUNSLG9DQUFvQztBQUNyQztBQUVBOzs7OztJQUtJO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztJQWVHO0FBQ0g7RUFDQyx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7Q0FDbkI7QUFDQTtFQUNDLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLFVBQVU7O0NBRVg7QUFDQTtFQUNDLG1DQUFtQztFQUNuQyxnQkFBZ0I7R0FDZjtBQUVBLDhDQUE4QztBQUM5QztFQUNELFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtHQUNkO0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0Qsc0JBQXNCO0VBQ3RCLHNCQUFzQjtHQUNyQjtBQUVBLDJDQUEyQztBQUMzQztFQUNELHlCQUF5QjtFQUN6QixZQUFZO0dBQ1g7QUFDQSxXQUFXO0FBQ1g7RUFDRCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDZCQUE2QjtHQUM1QjtBQUVBO0VBQ0QsYUFBYTtHQUNaO0FBRUE7RUFDRCxvQkFBb0I7RUFDcEIsa0JBQWtCO0dBQ2pCO0FBRUE7RUFDRCxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7R0FDaEI7QUFFQTtFQUNELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0dBQ2Y7QUFFQTtFQUNELGdCQUFnQjtFQUNoQixlQUFlO0dBQ2Q7QUFFQTtFQUNELGtCQUFrQjtFQUNsQixXQUFXO0dBQ1Y7QUFFQTtFQUNELGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiwyQkFBc0I7RUFBdEIsc0JBQXNCO0VBQ3RCLHVDQUF1QztFQUN2QyxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtHQUNmO0FBRUE7RUFDRCxnQkFBZ0I7RUFDaEIsZUFBZTtHQUNkO0FBRUE7RUFDRCxnQkFBZ0I7R0FDZjtBQUVBO0VBQ0QscUJBQXFCO0dBQ3BCO0FBRUE7RUFDRCxhQUFhO0lBQ1gsbUJBQW1CO0dBQ3BCO0FBRUE7RUFDRCxXQUFXO0VBQ1gsb0JBQW9CO0dBQ25CO0FBRUE7RUFDRCxXQUFXO0dBQ1Y7QUFFQTtFQUNELG9CQUFlO09BQWYsZUFBZTtFQUNmLHVCQUFrQjtPQUFsQixrQkFBa0I7R0FDakI7QUFFQTtFQUNELGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztHQUNWO0FBRUE7RUFDRCxhQUFhO0VBQ2IsbUJBQW1CO0dBQ2xCO0FBRUE7RUFDRCxjQUFjO0dBQ2I7QUFFQTtFQUNEO0lBQ0UsaUJBQWlCO0VBQ25CO0dBQ0M7QUFFQTtFQUNEO0lBQ0UsT0FBTztFQUNUOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiO0dBQ0M7QUFDQSxTQUFTO0FBQ1Q7RUFDRCxnQkFBZ0I7R0FDZjtBQUVBO0VBQ0Qsb0RBQW9EO0VBQ3BELHNCQUFzQjs7R0FFckI7QUFDQTtFQUNELHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osc0JBQXNCO0dBQ3JCO0FBRUgsY0FBYztBQUVkO0NBQ0Msc0JBQW1CO0lBQW5CLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1oseUJBQXlCO0VBQ3hCO0FBQ0E7OztLQUdHO0FBQ0g7Q0FDRCxVQUFVO0NBQ1YscUJBQXFCO0VBQ3BCO0FBQ0E7Q0FDRCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxTQUFTO0VBQ1I7QUFDQTtDQUNELFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsa0JBQWtCOztFQUVqQjtBQUNBO0NBQ0QsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7OztFQUdqQjtBQUNBO0NBQ0Q7c0JBQ3FCO0NBQ3JCLDJCQUEyQjtFQUMxQjtBQUVBO0NBQ0QscUJBQXFCO0VBQ3BCO0FBRUE7Q0FDRCxtQkFBbUI7RUFDbEI7QUFFQTtDQUNELHdCQUF3QjtDQUN4QixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGNBQWM7RUFDYjtBQUNBO0NBQ0QsY0FBYztDQUNkLDRFQUE0RTs7RUFFM0U7QUFDQTtDQUNELGFBQWE7RUFDWiIsImZpbGUiOiJwcm9kdWN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHtcblx0YmFja2dyb3VuZC1pbWFnZTp1cmwoL2Fzc2V0cy9pbWFnZXMvYmFja2cucG5nKTtcblxufSBcbi8qIGhlYWRlcntcblx0XG5cdGRpc3BsYXk6IGZsZXg7XG5ib3JkZXI6IDJweCBzb2xpZCByZ2IoMTI0LCAyMTgsIDUxKTtcbmNvbG9yOiByZ2IoMjQ1LCAyNTEsIDI1MSk7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDE0MCwgMTQwKTtcbmZvbnQtd2VpZ2h0OiAxMDAwO1xufSAqL1xuLmxvZ297XG5cdGhlaWdodDogMTAwcHg7XG59XG4uYnV0dG9ue1xuXHRmbG9hdDpyaWdodDtcblx0dG9wOjQwJTtcblx0bGVmdDoxMCU7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDI0MywgMjQzKTtcbn1cblx0XG4vKiAudGl0bGV7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFxuXHRcdG1hcmdpbi1sZWZ0OiA0MCU7XG5cdFxuXHR9ICovXG5cdC8qIC5idG57XG5cdFx0Ym9yZGVyOiAzcHggc29saWQgcmdiKDIyMywgMjE5LCAyMTkpO1xuXHRcdHBhZGRpbmc6IDFweCA1cHg7XG5cdFx0Y29sb3I6cmdiKDI1NCwgMjQ5LCAyNDkpO1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAxMTQsIDEwKTtcblx0XHR3aWR0aDogMzAlO1xuXHRcdG1hcmdpbi1sZWZ0OiAxMCU7XG5cdFx0XG5cdFx0XG5cdH1cblx0LmJ0bjpob3Zlcntcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAxNzYsIDE4Myk7XG5cdFx0Y29sb3I6cmdiKDE3LCAxOCwgNjgpO1xuXHRcblx0fSAqL1xuXHQuZGVzY3JpcHRpb24gIHtcblx0XHQvKiBtYXJnaW4tbGVmdDogNDBweDsgKi9cblx0XHQvKiBtYXJnaW4tcmlnaHQ6IDUwJTsgKi9cblx0XHQvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG5cdFx0Y29sb3I6cmdiKDUwLCA1MCwgNjYpO1xuXHRcdGZvbnQtc2l6ZTogbGFyZ2U7XG5cdFx0Ym9yZGVyOiAycHggc29saWQgcmdiKDE0MywgMjQ2LCAxMDIpO1xuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRmb250LXdlaWdodDogODAwO1xuXHRcdHdpZHRoOiA2MCU7XG5cdFx0cGFkZGluZy1yaWdodDogMTAlO1xuXHR9XG5cdC5tZWRpY2luZWxvZ297XG5cdFx0Y29sb3I6IHJnYig5MiwgOTIsIDE1Nyk7XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2IoNTgsIDEwOCwgMTQ2KTtcblx0XHR3aWR0aDogNjAlO1xuXHRcdFxuXHR9XG5cdC50b3BuYXYge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgMTQxLCAxNTIpO1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdCAgfVxuXHQgIFxuXHQgIC8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXG5cdCAgLnRvcG5hdiBhIHtcblx0XHRmbG9hdDogbGVmdDtcblx0XHRjb2xvcjogI2YyZjJmMjtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0cGFkZGluZzogMTRweCAxNnB4O1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRmb250LXNpemU6IDE3cHg7XG5cdCAgfVxuXHQgIFxuXHQgIC8qIENoYW5nZSB0aGUgY29sb3Igb2YgbGlua3Mgb24gaG92ZXIgKi9cblx0ICAudG9wbmF2IGE6aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG5cdFx0Y29sb3I6IHJnYig3LCA2NywgMTA5KTtcblx0ICB9XG5cdCAgXG5cdCAgLyogQWRkIGEgY29sb3IgdG8gdGhlIGFjdGl2ZS9jdXJyZW50IGxpbmsgKi9cblx0ICAudG9wbmF2IGEuYWN0aXZlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjODY4ZjhiO1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0ICB9XG5cdCAgLyogZWRpdCA0ICovXG5cdCAgLmZvb3RlciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXHRcdHBhZGRpbmc6IDMwcHggMzBweCAyMHB4IDMwcHg7XG5cdFx0Y29sb3I6ICMyMzIyMjI7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2FhOWM5Yztcblx0ICB9XG5cdCAgXG5cdCAgLmZvb3RlciA+ICoge1xuXHRcdGZsZXg6ICAxIDEwMCU7XG5cdCAgfVxuXHQgIFxuXHQgIC5mb290ZXJfX2FkZHIge1xuXHRcdG1hcmdpbi1yaWdodDogMS4yNWVtO1xuXHRcdG1hcmdpbi1ib3R0b206IDJlbTtcblx0ICB9XG5cdCAgXG5cdCAgLmZvb3Rlcl9fbG9nbyB7XG5cdFx0Zm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHQgIH1cblx0ICBcblx0ICAuZm9vdGVyX19hZGRyIGgyIHtcblx0XHRtYXJnaW4tdG9wOiAxLjNlbTtcblx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0ICB9XG5cdCAgXG5cdCAgLm5hdl9fdGl0bGUge1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0Zm9udC1zaXplOiAxNXB4O1xuXHQgIH1cblx0ICBcblx0ICAuZm9vdGVyIGFkZHJlc3Mge1xuXHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRjb2xvcjogIzk5OTtcblx0ICB9XG5cdCAgXG5cdCAgLmZvb3Rlcl9fYnRuIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0aGVpZ2h0OiAzNnB4O1xuXHRcdG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAzMywgMzMsIDAuMDcpO1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuXHRcdGNvbG9yOiAjMmYyZjJmO1xuXHRcdGxpbmUtaGVpZ2h0OiAwO1xuXHRcdG1hcmdpbjogMC42ZW0gMDtcblx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0cGFkZGluZzogMCAxLjNlbTtcblx0ICB9XG5cdCAgXG5cdCAgLmZvb3RlciB1bCB7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdCAgfVxuXHQgIFxuXHQgIC5mb290ZXIgbGkge1xuXHRcdGxpbmUtaGVpZ2h0OiAyZW07XG5cdCAgfVxuXHQgIFxuXHQgIC5mb290ZXIgYSB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHQgIH1cblx0ICBcblx0ICAuZm9vdGVyX19uYXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXHQgIH1cblx0ICBcblx0ICAuZm9vdGVyX19uYXYgPiAqIHtcblx0XHRmbGV4OiAxIDUwJTtcblx0XHRtYXJnaW4tcmlnaHQ6IDEuMjVlbTtcblx0ICB9XG5cdCAgXG5cdCAgLm5hdl9fdWwgYSB7XG5cdFx0Y29sb3I6ICM5OTk7XG5cdCAgfVxuXHQgIFxuXHQgIC5uYXZfX3VsLS1leHRyYSB7XG5cdFx0Y29sdW1uLWNvdW50OiAyO1xuXHRcdGNvbHVtbi1nYXA6IDEuMjVlbTtcblx0ICB9XG5cdCAgXG5cdCAgLmxlZ2FsIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRjb2xvcjogIzk5OTtcblx0ICB9XG5cdFx0XG5cdCAgLmxlZ2FsX19saW5rcyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHQgIH1cblx0ICBcblx0ICAuaGVhcnQge1xuXHRcdGNvbG9yOiAjMmYyZjJmO1xuXHQgIH1cblx0ICBcblx0ICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNC4zNzVlbSkge1xuXHRcdC5sZWdhbCAubGVnYWxfX2xpbmtzIHtcblx0XHQgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdH1cblx0ICB9XG5cdCAgXG5cdCAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAuMzc1ZW0pIHtcblx0XHQuZm9vdGVyX19uYXYgPiAqIHtcblx0XHQgIGZsZXg6IDE7XG5cdFx0fVxuXHRcdFxuXHRcdC5uYXZfX2l0ZW0tLWV4dHJhIHtcblx0XHQgIGZsZXgtZ3JvdzogMjtcblx0XHR9XG5cdFx0XG5cdFx0LmZvb3Rlcl9fYWRkciB7XG5cdFx0ICBmbGV4OiAxIDBweDtcblx0XHR9XG5cdFx0XG5cdFx0LmZvb3Rlcl9fbmF2IHtcblx0XHQgIGZsZXg6IDIgMHB4O1xuXHRcdH1cblx0ICB9XG5cdCAgLyogY2FyZCAqL1xuXHQgIC5leGFtcGxlLWNhcmQge1xuXHRcdG1heC13aWR0aDogNDAwcHg7XG5cdCAgfVxuXHQgIFxuXHQgIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jYXJ0aWNvbi5qcGcnKTtcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFxuXHQgIH1cblx0ICAubWVkZGVzY3tcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZjU5NTA0O1xuXHRcdGZsb2F0OiByaWdodDtcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHQgIH1cbiAgIFxuLyogaGVhZGVyLWNzcyovXG5cbi5oZWFkZXJfcGhhcm1hY3lfbG9nb3tcblx0b2JqZWN0LWZpdDogY29udGFpbjtcblx0d2lkdGg6IDEwMHB4O1xuXHRtYXJnaW46IDEycHggMjBweCAwcHggMnB4O1xuICB9XG4gIC8qIC5uYXZiYXItYnJhbmQge1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0Zm9udC1zaXplOiBsYXJnZXI7XG4gIH0gKi9cbiAgI3NlYXJjaGZ1bGwge1xuXHR3aWR0aDogNTAlO1xuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmxvZ29DbGFzczIge1xuXHRoZWlnaHQ6IDRyZW07XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogNXB4O1xuXHR0b3AgOjEwcHg7XG4gIH1cbiAgI25hdkJyYW5kIHtcblx0d2lkdGg6IDEwcmVtO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdG1hcmdpbi1sZWZ0OiAzM3JlbTtcblx0XG4gIH1cbiAgI0ZlYXR1cmVzIHtcblx0d2lkdGg6IDM1cmVtO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdG1hcmdpbi1sZWZ0OiA2NXJlbTtcblx0XG5cdFxuICB9XG4gIC5NeU5hdiB7XG5cdC8qIG1hcmdpbi1sZWZ0OiA0MHB4O1xuXHRtYXJnaW4tcmlnaHQ6IDQwcHg7ICovXG5cdGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgfVxuXG4gIC5kZXN7XG5cdG1hcmdpbi1ib3R0b206IDEwMDBweDs7XG4gIH1cblxuICBtYXQtY2FyZHtcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuXG4gIC50ZXh0LXN0eWxle1xuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZiA7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Zm9udC13ZWlnaHQ6IDE1cHg7XG5cdGNvbG9yOiAjNmU3NTcyO1xuICB9XG4gIC50ZXh0LXN0eWxlLXB7XG5cdGZvbnQtc2l6ZToyMHB4O1xuXHRmb250LWZhbWlseTonR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuXHRcbiAgfVxuICAuZGVme1xuXHRmb250LXNpemU6MnB4O1xuICB9XG5cdFx0XG5cdCAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-description',
                templateUrl: './product-description.component.html',
                styleUrls: ['./product-description.component.css']
            }]
    }], function () { return [{ type: _Service_product_description_service__WEBPACK_IMPORTED_MODULE_2__["ProductDescriptionService"] }, { type: _Service_final_cart_service__WEBPACK_IMPORTED_MODULE_3__["FinalCartService"] }]; }, null); })();


/***/ }),

/***/ "Jb39":
/*!*********************************************************!*\
  !*** ./src/app/Home-Landing/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_section_home_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-section/home-section.component */ "bk4f");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "b+4D");






class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 42, vars: 0, consts: [[1, "section-header"], [1, "header-main", 2, "background-color", "aliceblue"], [1, "container", 2, "padding", "40px"], ["routerLink", "/", "routerActiveLink", "active"], ["src", "/assets/image/ApnaPharmacyLogo.jpeg", 1, "logoClass2"], [1, "row", "align-items-center"], ["id", "navBrand", 1, "order-lg-center", "col-lg-6", "col-sm-3", "col-3"], [1, "navbar-brand", 2, "font-family", "sans-serif", "text-align", "right"], ["id", "Features", 1, "container"], ["href", "#", 1, "btn", "btn-light", 2, "margin-right", "16px"], [1, "fa", "fa-user"], [1, "ms-1", "d-none", "d-sm-inline-block"], ["routerLink", "/login", "routerActiveLink", "active", 2, "text-decoration", "none", "color", "black"], ["data-bs-toggle", "offcanvas", 1, "btn", "btn-light"], [1, "fa", "fa-shopping-cart"], [1, "ms-1"], ["routerLink", "/finalcart", "routerActiveLink", "active", 2, "text-decoration", "none", "color", "black"], [1, "col-lg-5", "col-md-12", "col-12"], ["action", "#", 1, ""], [1, "input-group"], ["id", "nav-bar-main", 1, "navbar", "navbar-expand-lg", "bg-light,", "MyNav"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0", 2, "margin-left", "50px"], [1, "nav-item"], ["routerLink", "/buyerproduct", "routerActiveLink", "active", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], ["routerLink", "/buyerproduct", "routerActiveLink", "active", 1, "dropdown-item"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "APNA PHARMACY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "My cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nav", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Medicines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Health & Nutrition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-home-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-footer");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _home_section_home_section_component__WEBPACK_IMPORTED_MODULE_3__["HomeSectionComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".header_pharmacy_logo[_ngcontent-%COMP%]{\n    -o-object-fit: contain;\n       object-fit: contain;\n    width: 100px;\n    margin: 12px 20px 0px 2px;\n  }\n  \n  #searchfull[_ngcontent-%COMP%] {\n    width: 50%;\n    align-content: center;\n  }\n  .logoClass2[_ngcontent-%COMP%] {\n    height: 4rem;\n    position: absolute;\n    left: 5px;\n    top :10px;\n  }\n  #navBrand[_ngcontent-%COMP%] {\n    width: 10rem;\n    position: absolute;\n    margin-left: 33rem;\n    \n  }\n  #Features[_ngcontent-%COMP%] {\n    width: 25rem;\n    position: absolute;\n    margin-left: 73rem;\n    \n    \n  }\n  .MyNav[_ngcontent-%COMP%] {\n    \n    background-color: aliceblue;\n  }\n  #nav-bar-main[_ngcontent-%COMP%] {\n    background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpsyluJKA7Q557c4jRCyqxlTUbP3Km0R4IBhBF3plBQ&s\");\n  \n  }\n  .header-main[_ngcontent-%COMP%] {\n    background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpsyluJKA7Q557c4jRCyqxlTUbP3Km0R4IBhBF3plBQ&s\");\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQW1CO09BQW5CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0VBQzNCO0VBQ0E7OztLQUdHO0VBQ0g7SUFDRSxVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0VBQ1g7RUFDQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCOztFQUVwQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7OztFQUdwQjtFQUNBO0lBQ0U7eUJBQ3FCO0lBQ3JCLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsNkhBQTZIOztFQUUvSDtFQUNBO0lBQ0UsNkhBQTZIOztFQUUvSCIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfcGhhcm1hY3lfbG9nb3tcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW46IDEycHggMjBweCAwcHggMnB4O1xuICB9XG4gIC8qIC5uYXZiYXItYnJhbmQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICB9ICovXG4gICNzZWFyY2hmdWxsIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAubG9nb0NsYXNzMiB7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wIDoxMHB4O1xuICB9XG4gICNuYXZCcmFuZCB7XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMzNyZW07XG4gICAgXG4gIH1cbiAgI0ZlYXR1cmVzIHtcbiAgICB3aWR0aDogMjVyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA3M3JlbTtcbiAgICBcbiAgICBcbiAgfVxuICAuTXlOYXYge1xuICAgIC8qIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNDBweDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIH1cbiAgI25hdi1iYXItbWFpbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUndwc3lsdUpLQTdRNTU3YzRqUkN5cXhsVFViUDNLbTBSNElCaEJGM3BsQlEmc1wiKTtcbiAgXG4gIH1cbiAgLmhlYWRlci1tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSd3BzeWx1SktBN1E1NTdjNGpSQ3lxeGxUVWJQM0ttMFI0SUJoQkYzcGxCUSZzXCIpO1xuICBcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "KVIW":
/*!**********************************************!*\
  !*** ./src/app/Service/user-registration.ts ***!
  \**********************************************/
/*! exports provided: UserRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistration", function() { return UserRegistration; });
class UserRegistration {
    constructor() {
        this.email = "";
        this.fullName = "";
        this.number = "";
        this.password = "";
    }
}


/***/ }),

/***/ "KYHu":
/*!***********************************************!*\
  !*** ./src/app/Service/final-cart.service.ts ***!
  \***********************************************/
/*! exports provided: FinalCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalCartService", function() { return FinalCartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class FinalCartService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://apnapharmacy.stackroute.io";
    }
    getCart(email) {
        console.log("hello");
        console.log(email);
        return this.http.get(this.baseUrl + "/cart-service/cart/getCart/" + email);
    }
    addItemToCart(data) {
        return this.http.post(this.baseUrl + "/cart-service/cart/addItem", data);
    }
    removeItemFromCart(productId, customerEmail) {
        return this.http.delete(`${this.baseUrl}/cart-service/cart/removeItem/${productId}/${customerEmail}`);
    }
}
FinalCartService.ɵfac = function FinalCartService_Factory(t) { return new (t || FinalCartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FinalCartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FinalCartService, factory: FinalCartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinalCartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "MF6t":
/*!***************************************************************!*\
  !*** ./src/app/SellerUI/add-product/add-product.component.ts ***!
  \***************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_Service_seller_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/seller-service.service */ "TJLO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Header&Footer/f-all/f-all.component */ "kTK9");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















function AddProductComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-tab-group", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-tab", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "MRP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Product Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Select Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Syrups");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Tablet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Capsules");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Spray");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Brand");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Upload Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddProductComponent_div_38_Template_input_change_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.myFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Product Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "textarea", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_div_38_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.myProductInfoFunction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Add Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedIndex", ctx_r0.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.productInfoForm);
} }
class AddProductComponent {
    constructor(addproductservice, builder, _document) {
        this.addproductservice = addproductservice;
        this.builder = builder;
        this._document = _document;
        this.active = 0;
        this.flag = false;
        this.url = '';
        this.allProducts = [];
        this.productsList = [];
        this.sellerEmail = localStorage.getItem("email");
        this.productInfoForm = this.builder.group({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            productPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            productCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            productBrand: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            productDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            // productQuantity:new FormControl('',[Validators.required]),
            // sellerEmail:new FormControl('',[Validators.required]),
            // sellingPrice:new FormControl('',[Validators.required]),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    ngOnInit() { }
    get productName() {
        return this.productInfoForm.get('productName');
    }
    get productPrice() {
        return this.productInfoForm.get('productPrice');
    }
    get file() {
        return this.productInfoForm.get('file');
    }
    get productDescription() {
        return this.productInfoForm.get('productDescription');
    }
    get productBrand() {
        return this.productInfoForm.get('productBrand');
    }
    get productCategory() {
        return this.productInfoForm.get('productCategory');
    }
    myFile(data) {
        console.log("Ram", data);
        this.selectedFile = data.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.selectedFile);
        reader.onload = (data) => {
            this.url = data.target.result;
        };
    }
    myProductInfoFunction() {
        const u = this.productInfoForm.value;
        console.log("product to send", u);
        this.active = 2;
        this.product = {
            productName: this.productInfoForm.value.productName,
            productPrice: this.productInfoForm.value.productPrice,
            productDescription: this.productInfoForm.value.productDescription,
            productQuantity: this.productInfoForm.value.productQuantity,
            // description:this.productInfoForm.value.description,
            productCategory: this.productInfoForm.value.productCategory,
            productBrand: this.productInfoForm.value.productBrand,
            file: this.url
        };
        this.allProducts.push(this.product);
        this.productTosend = {
            productName: this.productInfoForm.value.productName,
            productPrice: this.productInfoForm.value.productPrice,
            productDescription: this.productInfoForm.value.productDescription,
            productQuantity: this.productInfoForm.value.productQuantity,
            // description:this.productInfoForm.value.description,
            productCategory: this.productInfoForm.value.productCategory,
            productBrand: this.productInfoForm.value.productBrand,
            file: this.selectedFile,
            sellerEmail: JSON.parse(this.sellerEmail)
        };
        this.productsList.push(this.productTosend);
        console.log(this.productsList.selectedFile);
        console.log(this.productsList);
        console.log("Submitted");
        for (var i = 0; i < this.productsList.length; i++) {
            var image = new FormData();
            var data;
            data = image.append('file', this.productsList[i].file, this.productsList[i].file.name);
            console.log("DATA", data);
            delete this.productsList[i]['file'];
            image.append('product', JSON.stringify(this.productsList[i]));
            console.log(this.productsList.sellerEmail);
            console.log("IMAGE", image);
            console.log("data with product object");
            this.addproductservice.addProduct(image).subscribe(a => {
                console.log(a);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Added Product Successfully");
                this._document.defaultView.location.reload();
            }, (error) => {
                console.log(error);
            });
        }
        this.productInfoForm.reset();
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Service_seller_service_service__WEBPACK_IMPORTED_MODULE_4__["SellerServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], decls: 40, vars: 1, consts: [[1, "z"], [1, "c"], [1, "container", 2, "padding", "40px"], ["src", "/assets/image/ApnaPharmacyLogo.jpeg", 1, "logoClass2"], [1, "row", "align-items-center"], ["id", "navBrand", 1, "order-lg-center", "col-lg-6", "col-sm-3", "col-3"], ["href", "http://localhost:4200", 1, "navbar-brand", 2, "font-family", "sans-serif", "text-align", "right"], [1, "box4"], [1, "box3"], ["src", "/assets/image/1.ico", "height", "20px"], ["routerLink", "/app-header-loggedin", "routerLinkActive", "active"], ["src", "/assets/image/3.ico", "height", "20px"], ["routerLink", "/view-product", "routerLinkActive", "active"], ["src", "/assets/image/4.ico", "height", "20px"], ["routerLink", "/add-product", "routerLinkActive", "active"], ["src", "/assets/image/7.ico", "height", "20px"], [1, "box"], [1, "box5"], [1, "heading", 2, "height", "4rem"], [4, "ngIf"], ["mat-align-tabs", "center", 3, "selectedIndex"], ["label", "Product Details"], [2, "background-color", "aliceblue"], [1, "stepper", 3, "formGroup"], [1, "subcard"], ["appearance", "fill", 1, "cardcontent"], ["matInput", "", "placeholder", "Product Name", "formControlName", "productName", "type", "text"], [1, "row"], [1, "col-md-4"], ["matInput", "", "placeholder", "MRP", "formControlName", "productPrice", "type", "number", "min", "0"], ["formControlName", "productCategory"], ["value", "Syrups"], ["value", "Tablet"], ["value", "Capsules"], ["value", "Spray"], ["value", "Others"], ["matInput", "", "placeholder", "Enter Brand", "formControlName", "productBrand", "type", "text"], ["type", "file", "formControlName", "file", "placeholder", "Upload Image", 1, "cardcontent", 3, "change"], ["matInput", "", "placeholder", "Description", "formControlName", "productDescription", "type", "text"], ["type", "submit", 1, "btn", "btn-success", 3, "click"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "APNA PHARMACY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "View Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, AddProductComponent_div_38_Template, 54, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "app-f-all");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.flag == false);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_7__["FAllComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: [".body[_ngcontent-%COMP%]{\n    width: auto;\n    background-color: grey;\n    height: 100%;\n}\n.horizontal[_ngcontent-%COMP%]{\n    width: auto;\n    height: auto;\n    \n    margin: 3%;\n    border-radius: 20px;\n    box-shadow: -10px -10px 10px  white;\n}\nh1[_ngcontent-%COMP%]{\n    margin-left: auto;\n    margin-right: auto;\n}\n.subcard[_ngcontent-%COMP%]{\n    width: 100%;\n    margin-left: 0%;\n    margin-top: 1%;\n    margin-bottom: auto;\n    border-radius: 20px;\n    \n    box-shadow: -10px -10px 15px white;\n}\n.cardcontent[_ngcontent-%COMP%]{\n    width: 100%;\n    \n    background-color: #F9F6F0;\n}\n.btn-success[_ngcontent-%COMP%]{\n    width: 100%;\n    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);\n}\n.btn-warning[_ngcontent-%COMP%]{\n    color: white;\n}\nth[_ngcontent-%COMP%]{\n    background-color: #F9F6F0;\n}\ntd[_ngcontent-%COMP%]{\n    background-color: #F9F6F0;\n}\n.img-thumbnail[_ngcontent-%COMP%]{\n    height: 20%;\n    width: 25%;\n}\n.table[_ngcontent-%COMP%]{\n    margin-top: 5%;\n    height: auto;\n}\n.number[_ngcontent-%COMP%]{\n    display: inline-block;\n}\n.productslist[_ngcontent-%COMP%]{\n    margin-top: -5%;\n}\n.right[_ngcontent-%COMP%]{\n    float: right;\n}\n\n\n.z[_ngcontent-%COMP%]{\n    margin: 0%;\n    padding: 0%;\n}\n.box[_ngcontent-%COMP%]{\n    position: absolute;\n    margin-left: 10%;\n    margin-right: 0%;\n    height: 620px;\n    width: 90%;\n    border: 2px solid black;\n    background-image: url('/assets/image/map.ico');\n}\n.c[_ngcontent-%COMP%]{\n    display: flex;\n    border: 2px solid black;\n    width: 100%;\n}\n.box1[_ngcontent-%COMP%]{\n    height: 100%;\n    background-color: white;\n}\n.box2[_ngcontent-%COMP%]{\n    height: 100%;\n    color: aquamarine;\n    margin-left: 40%;\n    \n    margin-top: 2%;\n    \n}\n.box4[_ngcontent-%COMP%]{\n    display: flex;\n    border: 2px solid black;\n    height: 80%;\n    width: 100%;\n}\n.box3[_ngcontent-%COMP%]{\n    height: 620px;\n    width: 10%;\n    background-color: aliceblue;\n}\n.box3[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    margin-left: 5%;\n}\n.box5[_ngcontent-%COMP%]{\n    margin: 20px;\n    padding: 20px;\n    border: 2px solid black;\n    border-radius: 40px;\n    background-color: white;\n}\n.box6[_ngcontent-%COMP%]{\n    background-color: aquamarine;\n}\n.header_pharmacy_logo[_ngcontent-%COMP%]{\n    -o-object-fit: contain;\n       object-fit: contain;\n    width: 100px;\n    margin: 12px 20px 0px 2px;\n  }\n\n#searchfull[_ngcontent-%COMP%] {\n    width: 50%;\n    align-content: center;\n  }\n.logoClass2[_ngcontent-%COMP%] {\n    height: 4rem;\n    position: absolute;\n    left: 5px;\n    top :10px;\n  }\n#navBrand[_ngcontent-%COMP%] {\n    width: 10rem;\n    position: absolute;\n    margin-left: 33rem;\n    \n  }\n#Features[_ngcontent-%COMP%] {\n    width: 35rem;\n    position: absolute;\n    margin-left: 65rem;\n    \n    \n  }\n.MyNav[_ngcontent-%COMP%] {\n    \n    background-color: aliceblue;\n  }\nheader[_ngcontent-%COMP%] {\n    background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpsyluJKA7Q557c4jRCyqxlTUbP3Km0R4IBhBF3plBQ&s\");\n  \n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaURBQWlEO0FBQ3JEO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBOztHQUVHO0FBQ0g7OzJGQUUyRjtBQUMzRjtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHNCQUFtQjtPQUFuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjtBQUNBOzs7S0FHRztBQUNIO0lBQ0UsVUFBVTtJQUNWLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztFQUNYO0FBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjs7RUFFcEI7QUFDQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCOzs7RUFHcEI7QUFDQTtJQUNFO3lCQUNxQjtJQUNyQiwyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLDZIQUE2SDs7O0VBRy9IIiwiZmlsZSI6ImFkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5ob3Jpem9udGFse1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGNkYwOyAqL1xuICAgIG1hcmdpbjogMyU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3gtc2hhZG93OiAtMTBweCAtMTBweCAxMHB4ICB3aGl0ZTtcbn1cbmgxe1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5zdWJjYXJke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0Y5RjZGMDsgKi9cbiAgICBib3gtc2hhZG93OiAtMTBweCAtMTBweCAxNXB4IHdoaXRlO1xufVxuLmNhcmRjb250ZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDIwcHg7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjZGMDtcbn1cbi5idG4tc3VjY2Vzc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IHJnYmEoNDYsIDIyOSwgMTU3LCAwLjQpO1xufVxuLmJ0bi13YXJuaW5ne1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbnRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY2RjA7XG59XG50ZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGNkYwO1xufVxuLmltZy10aHVtYm5haWx7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgd2lkdGg6IDI1JTtcbn1cbi50YWJsZXtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4ubnVtYmVye1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wcm9kdWN0c2xpc3R7XG4gICAgbWFyZ2luLXRvcDogLTUlO1xufVxuLnJpZ2h0e1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi8qIGJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcbn0gKi9cbi8qIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4yLjMvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMi4zL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS82LjIuMC9jc3MvYWxsLm1pbi5jc3NcIik7ICovXG4uentcbiAgICBtYXJnaW46IDAlO1xuICAgIHBhZGRpbmc6IDAlO1xufVxuLmJveHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xuICAgIGhlaWdodDogNjIwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2UvbWFwLmljbycpO1xufVxuLmN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5ib3gxe1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5ib3gye1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogYXF1YW1hcmluZTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDMwJTsgKi9cbn1cbi5ib3g0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYm94M3tcbiAgICBoZWlnaHQ6IDYyMHB4O1xuICAgIHdpZHRoOiAxMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuLmJveDMgZGl2e1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5ib3g1e1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYm94NntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xufVxuLmhlYWRlcl9waGFybWFjeV9sb2dve1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbjogMTJweCAyMHB4IDBweCAycHg7XG4gIH1cbiAgLyogLm5hdmJhci1icmFuZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gIH0gKi9cbiAgI3NlYXJjaGZ1bGwge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB9XG4gIC5sb2dvQ2xhc3MyIHtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3AgOjEwcHg7XG4gIH1cbiAgI25hdkJyYW5kIHtcbiAgICB3aWR0aDogMTByZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAzM3JlbTtcbiAgICBcbiAgfVxuICAjRmVhdHVyZXMge1xuICAgIHdpZHRoOiAzNXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDY1cmVtO1xuICAgIFxuICAgIFxuICB9XG4gIC5NeU5hdiB7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgfVxuICBoZWFkZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1J3cHN5bHVKS0E3UTU1N2M0alJDeXF4bFRVYlAzS20wUjRJQmhCRjNwbEJRJnNcIik7XG4gIFxuICAgIFxuICB9XG4gIFxuXG5cbiBcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add-product',
                templateUrl: './add-product.component.html',
                styleUrls: ['./add-product.component.css']
            }]
    }], function () { return [{ type: src_app_Service_seller_service_service__WEBPACK_IMPORTED_MODULE_4__["SellerServiceService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "OKSz":
/*!********************************************************!*\
  !*** ./src/app/Header&Footer/h-all/h-all.component.ts ***!
  \********************************************************/
/*! exports provided: HAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAllComponent", function() { return HAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Service_final_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/final-cart.service */ "KYHu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class HAllComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.Email = localStorage.getItem("email");
    }
    ngOnInit() {
    }
    viewCart() {
        // const form = document.querySelector('form')
        // var data= new FormData();
        // console.log(this.email);
        var nun;
        // data.append('customerEmail',JSON.stringify(this.email));
        // console.log(data,"nun  data");
        this.service.getCart(JSON.parse(this.Email)).subscribe((y) => {
            console.log(y);
            console.log("inside");
            this.carts = y;
            this.router.navigate(["/finalcart"]);
            console.log(this.carts);
            console.log(this.carts.cartProducts);
        });
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('productid');
        localStorage.removeItem('email');
    }
}
HAllComponent.ɵfac = function HAllComponent_Factory(t) { return new (t || HAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_final_cart_service__WEBPACK_IMPORTED_MODULE_1__["FinalCartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HAllComponent, selectors: [["app-h-all"]], decls: 44, vars: 0, consts: [[1, "section-header"], [1, "header-main", 2, "background-color", "aliceblue"], [1, "container", 2, "padding", "40px"], ["routerLink", "/app-header-loggedin", "routerActiveLink", "active"], ["src", "/assets/image/ApnaPharmacyLogo.jpeg", 1, "logoClass2"], [1, "row", "align-items-center"], ["id", "navBrand", 1, "order-lg-center", "col-lg-6", "col-sm-3", "col-3"], ["href", "http://localhost:4200", 1, "navbar-brand", 2, "font-family", "sans-serif", "text-align", "right"], ["id", "Features", 1, "container"], [1, "btn", "btn-light", 2, "margin-right", "16px"], [1, "fa-solid", "fa-house-medical-flag"], [1, "ms-1", "d-none", "d-sm-inline-block"], ["routerLink", "/SellerHome", "routerActiveLink", "active", 2, "text-decoration", "none", "color", "black"], ["data-bs-toggle", "offcanvas", 1, "btn", "btn-light", 2, "margin-right", "16px"], [1, "fa", "fa-shopping-cart"], [1, "ms-1", 3, "click"], [1, "fa-solid", "fa-right-from-bracket"], ["routerLink", "/", "routerActiveLink", "active", 2, "text-decoration", "none", "color", "black", 3, "click"], [1, "col-lg-5", "col-md-12", "col-12"], ["action", "#", 1, ""], [1, "input-group"], ["id", "nav-bar-main", 1, "navbar", "navbar-expand-lg", "bg-light,", "MyNav"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0", 2, "margin-left", "50px"], [1, "nav-item"], ["routerLink", "/buyerproduct", "routerActiveLink", "active", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], ["routerLink", "/buyerproduct", "routerActiveLink", "active", 1, "dropdown-item"]], template: function HAllComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "APNA PHARMACY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HAllComponent_Template_span_click_18_listener() { return ctx.viewCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "My cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HAllComponent_Template_a_click_23_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nav", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Medicines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Health & Nutrition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: [".header_pharmacy_logo[_ngcontent-%COMP%]{\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100px;\n  margin: 12px 20px 0px 2px;\n}\n\n#searchfull[_ngcontent-%COMP%] {\n  width: 50%;\n  align-content: center;\n}\n.logoClass2[_ngcontent-%COMP%] {\n  height: 4rem;\n  position: absolute;\n  left: 5px;\n  top :10px;\n}\n#navBrand[_ngcontent-%COMP%] {\n  width: 10rem;\n  position: absolute;\n  margin-left: 33rem;\n  \n}\n#Features[_ngcontent-%COMP%] {\n  width: 35rem;\n  position: absolute;\n  margin-left: 65rem;\n  \n  \n}\n.MyNav[_ngcontent-%COMP%] {\n  \n  background-color: aliceblue;\n}\n.header-main[_ngcontent-%COMP%] {\n  background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpsyluJKA7Q557c4jRCyqxlTUbP3Km0R4IBhBF3plBQ&s\");\n\n  \n}\n#nav-bar-main[_ngcontent-%COMP%] {\n  background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpsyluJKA7Q557c4jRCyqxlTUbP3Km0R4IBhBF3plBQ&s\");\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImgtYWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFDQTs7O0dBR0c7QUFDSDtFQUNFLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7O0FBRXBCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjs7O0FBR3BCO0FBQ0E7RUFDRTt1QkFDcUI7RUFDckIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSw2SEFBNkg7OztBQUcvSDtBQUNBO0VBQ0UsNkhBQTZIOztBQUUvSCIsImZpbGUiOiJoLWFsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcl9waGFybWFjeV9sb2dve1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMTJweCAyMHB4IDBweCAycHg7XG59XG4vKiAubmF2YmFyLWJyYW5kIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufSAqL1xuI3NlYXJjaGZ1bGwge1xuICB3aWR0aDogNTAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9nb0NsYXNzMiB7XG4gIGhlaWdodDogNHJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1cHg7XG4gIHRvcCA6MTBweDtcbn1cbiNuYXZCcmFuZCB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMzNyZW07XG4gIFxufVxuI0ZlYXR1cmVzIHtcbiAgd2lkdGg6IDM1cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA2NXJlbTtcbiAgXG4gIFxufVxuLk15TmF2IHtcbiAgLyogbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuLmhlYWRlci1tYWluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUndwc3lsdUpLQTdRNTU3YzRqUkN5cXhsVFViUDNLbTBSNElCaEJGM3BsQlEmc1wiKTtcblxuICBcbn1cbiNuYXYtYmFyLW1haW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSd3BzeWx1SktBN1E1NTdjNGpSQ3lxeGxUVWJQM0ttMFI0SUJoQkYzcGxCUSZzXCIpO1xuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HAllComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-h-all',
                templateUrl: './h-all.component.html',
                styleUrls: ['./h-all.component.css']
            }]
    }], function () { return [{ type: src_app_Service_final_cart_service__WEBPACK_IMPORTED_MODULE_1__["FinalCartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "P2sg":
/*!**********************************************************************************!*\
  !*** ./src/app/Header-for-login-register/login-header/login-header.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LoginHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginHeaderComponent", function() { return LoginHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class LoginHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginHeaderComponent.ɵfac = function LoginHeaderComponent_Factory(t) { return new (t || LoginHeaderComponent)(); };
LoginHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginHeaderComponent, selectors: [["app-login-header"]], decls: 14, vars: 0, consts: [[1, "section-header"], [1, "header-main", 2, "background-color", "aliceblue"], [1, "container", 2, "padding", "40px"], ["routerLink", "/", "routerActiveLink", "active"], ["src", "/assets/image/ApnaPharmacyLogo.jpeg", 1, "logoClass2"], [1, "row", "align-items-center"], ["id", "navBrand", 1, "order-lg-center", "col-lg-6", "col-sm-3", "col-3"], ["href", "http://localhost:4200", 1, "navbar-brand", 2, "font-family", "sans-serif", "text-align", "right"], ["id", "Features", 1, "container"], [1, "col-lg-5", "col-md-12", "col-12"], ["action", "#", 1, ""], [1, "input-group"]], template: function LoginHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "APNA PHARMACY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".header_pharmacy_logo[_ngcontent-%COMP%]{\n    -o-object-fit: contain;\n       object-fit: contain;\n    width: 100px;\n    margin: 12px 20px 0px 2px;\n  }\n  \n  #searchfull[_ngcontent-%COMP%] {\n    width: 50%;\n    align-content: center;\n  }\n  .logoClass2[_ngcontent-%COMP%] {\n    height: 4rem;\n    position: absolute;\n    left: 5px;\n    top :10px;\n  }\n  #navBrand[_ngcontent-%COMP%] {\n    width: 10rem;\n    position: absolute;\n    margin-left: 33rem;\n    \n  }\n  #Features[_ngcontent-%COMP%] {\n    width: 35rem;\n    position: absolute;\n    margin-left: 73rem;\n    \n    \n  }\n  .MyNav[_ngcontent-%COMP%] {\n    \n    background-color: aliceblue;\n  }\n  .header-main[_ngcontent-%COMP%] {\n    background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpsyluJKA7Q557c4jRCyqxlTUbP3Km0R4IBhBF3plBQ&s\");\n  \n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQW1CO09BQW5CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0VBQzNCO0VBQ0E7OztLQUdHO0VBQ0g7SUFDRSxVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0VBQ1g7RUFDQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCOztFQUVwQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7OztFQUdwQjtFQUNBO0lBQ0U7eUJBQ3FCO0lBQ3JCLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsNkhBQTZIOzs7RUFHL0giLCJmaWxlIjoibG9naW4taGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX3BoYXJtYWN5X2xvZ297XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiAxMnB4IDIwcHggMHB4IDJweDtcbiAgfVxuICAvKiAubmF2YmFyLWJyYW5kIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgfSAqL1xuICAjc2VhcmNoZnVsbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmxvZ29DbGFzczIge1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcCA6MTBweDtcbiAgfVxuICAjbmF2QnJhbmQge1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDMzcmVtO1xuICAgIFxuICB9XG4gICNGZWF0dXJlcyB7XG4gICAgd2lkdGg6IDM1cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogNzNyZW07XG4gICAgXG4gICAgXG4gIH1cbiAgLk15TmF2IHtcbiAgICAvKiBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICB9XG4gIC5oZWFkZXItbWFpbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUndwc3lsdUpLQTdRNTU3YzRqUkN5cXhsVFViUDNLbTBSNElCaEJGM3BsQlEmc1wiKTtcbiAgXG4gICAgXG4gIH1cbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-header',
                templateUrl: './login-header.component.html',
                styleUrls: ['./login-header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Qh/k":
/*!*******************************************************************************************!*\
  !*** ./src/app/Store-Recommendation/recommendation-body/recommendation-body.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RecommendationBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationBodyComponent", function() { return RecommendationBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class RecommendationBodyComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecommendationBodyComponent.ɵfac = function RecommendationBodyComponent_Factory(t) { return new (t || RecommendationBodyComponent)(); };
RecommendationBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecommendationBodyComponent, selectors: [["app-recommendation-body"]], decls: 38, vars: 0, consts: [[1, "container-fluid", 2, "display", "flex"], [1, "mat-elevation-z7"], [2, "margin-left", "2%", "margin-top", "1%"], [2, "text-decoration", "none", "color", "red"], ["mat-card-image", "", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpu8uhLohPc654dRyN4i7lBHPcHiY4Y4vWFU7by7N&s", "height", "200px"], ["mat-raised-button", "", "color", "accent"], ["mat-card-image", "", "src", "https://images.unsplash.com/photo-1642055514517-7b52288890ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBoYXJtYWN5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "height", "200px"], ["mat-card-image", "", "src", "https://content.jdmagicbox.com/comp/delhi/m1/011pxx11.xx11.190401175233.v5m1/catalogue/nirmal-pharmacy-delhi-1ezxmvnh1b.jpg?clr=57ff", "height", "200px"], ["mat-card-image", "", "src", "https://bl-i.thgim.com/public/incoming/xtohv1/article65909459.ece/alternates/FREE_1200/apollopharmacy_17.jpg", "height", "200px"]], template: function RecommendationBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Recommendation Of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "u", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Shops");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DenchMedPharma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LocateUs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "MediFrat Pharma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "LocateUs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "NirmalPharmacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "LocateUs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Apollo Pharmacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "LocateUs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".mat-elevation-z7[_ngcontent-%COMP%]{\n    margin-right: 20px;\n    width: 300px;\n    margin-left: 40px;\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZGF0aW9uLWJvZHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJyZWNvbW1lbmRhdGlvbi1ib2R5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWVsZXZhdGlvbi16N3tcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommendationBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recommendation-body',
                templateUrl: './recommendation-body.component.html',
                styleUrls: ['./recommendation-body.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RpJL":
/*!*******************************************************************!*\
  !*** ./src/app/SellerUI/order-history/order-history.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OrderHistoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
OrderHistoryComponent.ɵfac = function OrderHistoryComponent_Factory(t) { return new (t || OrderHistoryComponent)(); };
OrderHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderHistoryComponent, selectors: [["app-order-history"]], decls: 0, vars: 0, template: function OrderHistoryComponent_Template(rf, ctx) { }, styles: ["@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css\");\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\");\n.f[_ngcontent-%COMP%]{\n    text-align: center;\n    border-bottom: 2px solid black;\n}\n#content[_ngcontent-%COMP%] {\n    padding: 16px;\n}\n#content[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\n    width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWhpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRkFBc0Y7QUFDdEYsMkZBQTJGO0FBQzNGLHdGQUF3RjtBQUN4RjtJQUNJLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoib3JkZXItaGlzdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjIuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4yLjMvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzYuMi4wL2Nzcy9hbGwubWluLmNzc1wiKTtcbi5me1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG59XG4jY29udGVudCB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuI2NvbnRlbnQgPiBtYXQtY2FyZCB7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-history',
                templateUrl: './order-history.component.html',
                styleUrls: ['./order-history.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Learnzilla';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TJLO":
/*!***************************************************!*\
  !*** ./src/app/Service/seller-service.service.ts ***!
  \***************************************************/
/*! exports provided: SellerServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerServiceService", function() { return SellerServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SellerServiceService {
    //   baseUrl ="http://localhost:8080";
    // private baseUrl: string = 'http://localhost:9000/product';
    constructor(http) {
        this.http = http;
    }
    addProduct(data) {
        console.log(data);
        return this.http.post(this.baseUrl + "/product-service/product/addproduct", data);
        return this.http.post(this.baseUrl + "/product-service/product/addproduct", data);
    }
    getProduct(sellerEmail) {
        return this.http.get(this.baseUrl + "/product/getbyemail/" + sellerEmail);
    }
    getProfile(sellerEmail) {
        return this.http.get(this.baseUrl + "/product-service/shop/getbyemail/" + sellerEmail);
    }
    update(p) {
        console.log(p);
        return this.http.post(this.baseUrl + "/product-service/shop/addshop", p);
    }
    deleteProduct(productId) {
        return this.http.delete(this.baseUrl + "/product-service/product/deleteproduct/" + productId);
    }
}
SellerServiceService.ɵfac = function SellerServiceService_Factory(t) { return new (t || SellerServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SellerServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SellerServiceService, factory: SellerServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "WYAh":
/*!*****************************************************************************!*\
  !*** ./src/app/BuyerProductListUi/buyer-product/buyer-product.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BuyerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerComponent", function() { return BuyerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Service_buyer_product_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/buyer-product-service.service */ "5hKM");
/* harmony import */ var src_app_Service_final_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/final-cart.service */ "KYHu");
/* harmony import */ var _Header_Footer_h_all_h_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Header&Footer/h-all/h-all.component */ "OKSz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Header&Footer/f-all/f-all.component */ "kTK9");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _SellerUI_image_image_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../SellerUI/image/image.component */ "YNNg");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../search.pipe */ "pDcK");

















function BuyerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No results found for \"", ctx_r1.searchText, "\".");
} }
function BuyerComponent_div_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyerComponent_div_13_ng_container_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const x_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.getProductById(x_r4.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-image", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyerComponent_div_13_ng_container_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const x_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.Addtocart(x_r4.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const x_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", x_r4.productImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r4.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: \u20B9", x_r4.productPrice, "");
} }
function BuyerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BuyerComponent_div_13_ng_container_1_Template, 15, 3, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r2.Productsmodel, ctx_r2.searchText));
} }
class BuyerComponent {
    constructor(route, router, service, Cartservice) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.Cartservice = Cartservice;
        this.Productsmodel = [];
        this.productId = localStorage.getItem("productId");
        this.customerEmail = localStorage.getItem("email");
    }
    ngOnInit() {
        this.service.getAllProduct().subscribe((x) => {
            console.log(x);
            this.Productsmodel = x;
        });
    }
    // getAllProduct()
    // {
    //   this.service.getAllProduct().subscribe(
    //     data => {this.mod=data},
    //     error => {
    //       this.mod =[];
    //       console.log(error);
    //     }
    //   );
    // }
    getProductById(productId) {
        this.service.getProductById(productId).subscribe((data) => {
            console.log(data);
            localStorage.setItem("productId", data.productId);
            this.router.navigate(["/product-description"]);
        }, (error) => {
            console.log(error);
        });
    }
    saveData(data) {
        localStorage.setItem('productId', data.productId);
        localStorage.setItem('productCategory', data.productCategory);
        localStorage.setItem('productCity', data.city);
        // if(localStorage.getItem("userRole")!='"seller"'){
        //   this.router.navigateByUrl("/navbar/productDetails")
        // }
    }
    Addtocart(Id) {
        this.productId = Id;
        var image = new FormData();
        image.append('customerEmail', JSON.parse(this.customerEmail));
        console.log(image, "customer email coming");
        image.append('productId', this.productId);
        console.log(image, "both appended");
        this.Cartservice.addItemToCart(image).subscribe((data) => {
            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Item is added to the cart!!");
        }, (error) => {
            console.log(error);
        });
    }
}
BuyerComponent.ɵfac = function BuyerComponent_Factory(t) { return new (t || BuyerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_buyer_product_service_service__WEBPACK_IMPORTED_MODULE_3__["BuyerProductServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_final_cart_service__WEBPACK_IMPORTED_MODULE_4__["FinalCartService"])); };
BuyerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuyerComponent, selectors: [["app-buyer-product"]], decls: 16, vars: 6, consts: [[1, "form-group", "mb-4"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange"], ["noResults", ""], ["id", "main"], [1, "container"], [1, "my-2", "pb-2"], ["color", "white", 2, "text-align", "center"], [1, "example-spacer"], ["fxLayout", "row wrap", "fxLayout.lt-sm", "column", "fxLayoutGap", "32px", "fxLayoutAlign", "flex-start", 4, "ngIf", "ngIfElse"], ["fxLayout", "row wrap", "fxLayout.lt-sm", "column", "fxLayoutGap", "32px", "fxLayoutAlign", "flex-start"], [4, "ngFor", "ngForOf"], ["fxFlex", "0 1 calc(25% - 32px)", "fxFlex.lt-md", "0 1 calc(33.3% - 32px)", "fxFlex.lt-sm", "100%", 1, "mat-elevation-z6", 2, "margin-bottom", "20px"], [3, "click"], [3, "image"], ["id", "p-name"], ["id", "p-price", 1, "mt-2"], [2, "margin-top", "0.5px"], ["mat-stroked-button", "", "color", "warn", 2, "margin-left", "30%", "text-align", "center", 3, "click"]], template: function BuyerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-h-all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuyerComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BuyerComponent_ng_template_3_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-toolbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Health Care Prducts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BuyerComponent_div_13_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-f-all");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 3, ctx.Productsmodel, ctx.searchText).length > 0)("ngIfElse", _r0);
    } }, directives: [_Header_Footer_h_all_h_all_component__WEBPACK_IMPORTED_MODULE_5__["HAllComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_9__["FAllComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardHeader"], _SellerUI_image_image_component__WEBPACK_IMPORTED_MODULE_12__["ImageComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], pipes: [_search_pipe__WEBPACK_IMPORTED_MODULE_15__["SearchPipe"]], styles: ["@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css\");\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\");\n#background[_ngcontent-%COMP%] {\n  background-color: rgb(243, 243, 243);\n  padding-bottom: 10px;\n}\n.discard[_ngcontent-%COMP%] {\n  background-color: aqua;\n}\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 320px;\n  background: #fff;\n  display: inline-block;\n  margin: 30px;\n  text-align: center;\n  border-radius: 20px;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);\n  border: none;\n}\nh4[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.mat-card-title[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  height: 50px;\n  width: 50px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n\n}\nfooter[_ngcontent-%COMP%] {\n\n  height: 20vh;\n}\nfooter[_ngcontent-%COMP%], article[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], aside[_ngcontent-%COMP%] {\n  padding: 1em;\n}\nfooter[_ngcontent-%COMP%] {\n  height: 2px;\n}\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 20px;\n  font-size: 25px;\n}\narticle[_ngcontent-%COMP%] {\n  background-color: rgb(242, 245, 244);\n\n}\n.buy-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #1e4a92;\n  border-radius: 6px;\n  font-size: 12px;\n  color: #FFFFFF;\n  text-decoration: none;\n  border: none;\n\n  transition: all .5s;\n  outline: none;\n  width: 40%;\n  height: 10%;\n  margin-left: 10px;\n  cursor: pointer;\n}\n.Add-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: rgb(224, 224, 226);\n  border-radius: 6px;\n  font-size: 12px;\n  color: black;\n  text-decoration: none;\n  border: none;\n\n  transition: all .5s;\n  outline: none;\n  width: 40%;\n  height: 10%;\n  margin-left: 10px;\n  cursor: pointer;\n}\n.box1[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: white;\n}\n.box2[_ngcontent-%COMP%] {\n  color: aquamarine;\n  margin-left: 40vw;\n  text-align: center;\n  margin-top: 26px;\n  margin-left: 400px;\n}\n.c[_ngcontent-%COMP%] {\n  display: flex;\n  border: 2px solid black;\n  width: 100%;\n}\nimg[_ngcontent-%COMP%] {\n  height: 100px;\n\n}\n.P-Category-Label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 15px;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding-top: 12px;\n \n\n}\n.cardList[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.cardList[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.cardList[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 32px;\n}\n\n.cardListItem[_ngcontent-%COMP%] {\n  flex: 0 1 calc(25% - 32px);\n}\n\n@media screen and (max-width: 959px) {\n\n  \n  .cardList[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 32px;\n  }\n\n  \n  .cardListItem[_ngcontent-%COMP%] {\n    flex: 0 1 calc(33.3% - 32px);\n  }\n}\n\n@media screen and (max-width: 599px) {\n  .cardList[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n\n  .cardList[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: unset;\n    margin-bottom: 32px;\n  }\n}\n.mat-elevation-z6[_ngcontent-%COMP%]{\n  margin:20px 0 0 0;\n}\n.row[_ngcontent-%COMP%]{\n  margin:10px;\n}\n.offers[_ngcontent-%COMP%] {\n    \n    \n  height: 100px;\n  background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpsyluJKA7Q557c4jRCyqxlTUbP3Km0R4IBhBF3plBQ&s\");\n  \n}\nmat-toolbar[_ngcontent-%COMP%]{\n  background-color: white;\n \n}\n.halfPriceImages[_ngcontent-%COMP%] {\n  margin-right: 12px;\n \n  \n}\n#p-name[_ngcontent-%COMP%]{\n  font-weight:bold;\n  text-align:center;\n  \n}\n#p-price[_ngcontent-%COMP%]{\n  font-size: 15px;\n  text-align: center;\n}\napp-image[_ngcontent-%COMP%]{\n  margin-left:20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eWVyLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRkFBc0Y7QUFDdEYsMkZBQTJGO0FBQzNGLHdGQUF3RjtBQUV4RjtFQUNFLG9DQUFvQztFQUNwQyxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwyQ0FBMkM7RUFDM0MsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHNCQUFzQjs7QUFFeEI7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7QUFFQTs7OztFQUlFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7OztFQUdFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFFQTtFQUNFLG9DQUFvQzs7QUFFdEM7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFlBQVk7O0VBRVosbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZOztFQUVaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7QUFFQTtFQUNFLGFBQWE7O0FBRWY7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjs7O0FBR25CO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLDBCQUEwQjtBQUM1QjtBQUVBLHlCQUF5QjtBQUN6Qjs7RUFFRSxlQUFlO0VBQ2Y7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUEsZ0JBQWdCO0VBQ2hCO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0Y7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjtBQUNGO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsNkhBQTZIOztBQUUvSDtBQUVBO0VBQ0UsdUJBQXVCOztBQUV6QjtBQUNBO0VBQ0Usa0JBQWtCOzs7QUFHcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7O0FBRW5CO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImJ1eWVyLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4yLjMvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMi4zL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS82LjIuMC9jc3MvYWxsLm1pbi5jc3NcIik7XG5cbiNiYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmRpc2NhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDMyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDI1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmg0IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5tYXQtY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxubWF0LWljb24ge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbn1cblxuZm9vdGVyIHtcblxuICBoZWlnaHQ6IDIwdmg7XG59XG5cbmZvb3RlcixcbmFydGljbGUsXG5uYXYsXG5hc2lkZSB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuZm9vdGVyIHtcbiAgaGVpZ2h0OiAycHg7XG59XG5cbnRhYmxlLFxudGgsXG50ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbmFydGljbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDUsIDI0NCk7XG5cbn1cblxuLmJ1eS1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTRhOTI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5BZGQtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjQsIDIyNik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuXG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMTAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm94MSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYm94MiB7XG4gIGNvbG9yOiBhcXVhbWFyaW5lO1xuICBtYXJnaW4tbGVmdDogNDB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyNnB4O1xuICBtYXJnaW4tbGVmdDogNDAwcHg7XG59XG5cbi5jIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuXG59XG5cbi5QLUNhdGVnb3J5LUxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMTVweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuIFxuXG59XG5cbi5jYXJkTGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4vKiBDb2x1bW4gR2FwICovXG4uY2FyZExpc3Q+KiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jYXJkTGlzdD4qOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG5cbi8qIEl0ZW0gc2l6aW5nICovXG4uY2FyZExpc3RJdGVtIHtcbiAgZmxleDogMCAxIGNhbGMoMjUlIC0gMzJweCk7XG59XG5cbi8qIG1lZGl1bSBzaXplIHZpZXdwb3J0ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuXG4gIC8qIENvbHVtbiBHYXAgKi9cbiAgLmNhcmRMaXN0Pio6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICB9XG5cbiAgLyogSXRlbSBzaXppbmcgKi9cbiAgLmNhcmRMaXN0SXRlbSB7XG4gICAgZmxleDogMCAxIGNhbGMoMzMuMyUgLSAzMnB4KTtcbiAgfVxufVxuXG4vKiBzbWFsbCBzaXplIHZpZXdwb3J0ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuY2FyZExpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAuY2FyZExpc3Q+Kjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIH1cbn1cblxuLm1hdC1lbGV2YXRpb24tejZ7XG4gIG1hcmdpbjoyMHB4IDAgMCAwO1xufVxuLnJvd3tcbiAgbWFyZ2luOjEwcHg7XG59XG5cbi5vZmZlcnMge1xuICAgIFxuICAgIFxuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSd3BzeWx1SktBN1E1NTdjNGpSQ3lxeGxUVWJQM0ttMFI0SUJoQkYzcGxCUSZzXCIpO1xuICBcbn1cblxubWF0LXRvb2xiYXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuIFxufVxuLmhhbGZQcmljZUltYWdlcyB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiBcbiAgXG59XG4jcC1uYW1le1xuICBmb250LXdlaWdodDpib2xkO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgXG59XG5cbiNwLXByaWNle1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYXBwLWltYWdle1xuICBtYXJnaW4tbGVmdDoyMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buyer-product',
                templateUrl: './buyer-product.component.html',
                styleUrls: ['./buyer-product.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_Service_buyer_product_service_service__WEBPACK_IMPORTED_MODULE_3__["BuyerProductServiceService"] }, { type: src_app_Service_final_cart_service__WEBPACK_IMPORTED_MODULE_4__["FinalCartService"] }]; }, null); })();


/***/ }),

/***/ "YNNg":
/*!***************************************************!*\
  !*** ./src/app/SellerUI/image/image.component.ts ***!
  \***************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ImageComponent {
    constructor() { }
    ngOnInit() {
        this.retrieveImage = 'data:image/jpg;base64,' + this.image;
    }
}
ImageComponent.ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(); };
ImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageComponent, selectors: [["app-image"]], inputs: { image: "image" }, decls: 1, vars: 1, consts: [["height", "100px", 3, "src"]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.retrieveImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image',
                templateUrl: './image.component.html',
                styleUrls: ['./image.component.css']
            }]
    }], function () { return []; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "YWh5":
/*!***************************************************!*\
  !*** ./src/app/Service/login-advanced.service.ts ***!
  \***************************************************/
/*! exports provided: LoginAdvancedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdvancedService", function() { return LoginAdvancedService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class LoginAdvancedService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://apnapharmacy.stackroute.io";
    }
    getCurrentUser(username, token) {
        return this.http.get(this.baseUrl + '/authentication-service/api/user/' + username, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': 'Bearer ' + token })
        });
    }
    generateToken(loginData) {
        return this.http.post(this.baseUrl + '/authentication-service/authenticate', loginData);
    }
    loginUser(token) {
        localStorage.setItem("token", token);
        console.log(token);
        return true;
    }
    isLoggedin() {
        let tokenStr = localStorage.getItem("token");
        if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
            return false;
        }
        else {
            return true;
        }
    }
    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        return true;
    }
    getToken() {
        return localStorage.getItem('token');
    }
    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    getUser() {
        let userStr = localStorage.getItem("user");
        if (userStr != null) {
            return JSON.parse(userStr);
        }
        else {
            this.logout();
            return null;
        }
    }
    getUserRole() {
        let user = this.getUser();
        return user.role;
    }
}
LoginAdvancedService.ɵfac = function LoginAdvancedService_Factory(t) { return new (t || LoginAdvancedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
LoginAdvancedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginAdvancedService, factory: LoginAdvancedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginAdvancedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _Home_Landing_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home-Landing/material/material.module */ "x+0O");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _BuyerProductListUi_buyer_product_buyer_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./BuyerProductListUi/buyer-product/buyer-product.component */ "WYAh");
/* harmony import */ var _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-description/product-description.component */ "EyC3");
/* harmony import */ var _Home_Landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Home-Landing/footer/footer.component */ "b+4D");
/* harmony import */ var _Home_Landing_header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Home-Landing/header/header.component */ "Jb39");
/* harmony import */ var _Home_Landing_home_section_home_section_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Home-Landing/home-section/home-section.component */ "bk4f");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _Store_Recommendation_recommendation_body_recommendation_body_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Store-Recommendation/recommendation-body/recommendation-body.component */ "Qh/k");
/* harmony import */ var _finalcartui_cart_cart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./finalcartui/cart/cart.component */ "cfwO");
/* harmony import */ var _Home_Landing_After_Loggedin_footer_loggedin_footer_loggedin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Home-Landing-After-Loggedin/footer-loggedin/footer-loggedin.component */ "njMl");
/* harmony import */ var _Home_Landing_After_Loggedin_header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Home-Landing-After-Loggedin/header-loggedin/header-loggedin.component */ "aoUv");
/* harmony import */ var _Home_Landing_After_Loggedin_home_section_loggedin_home_section_loggedin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Home-Landing-After-Loggedin/home-section-loggedin/home-section-loggedin.component */ "ma8H");
/* harmony import */ var _SellerUI_image_image_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./SellerUI/image/image.component */ "YNNg");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Header&Footer/f-all/f-all.component */ "kTK9");
/* harmony import */ var _Header_Footer_h_all_h_all_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Header&Footer/h-all/h-all.component */ "OKSz");
/* harmony import */ var _Medicine_order_ui_order_home_ui_order_home_ui_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Medicine-order-ui/order-home-ui/order-home-ui.component */ "2Jhi");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./search.pipe */ "pDcK");
/* harmony import */ var _Header_for_login_register_login_header_login_header_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Header-for-login-register/login-header/login-header.component */ "P2sg");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _SellerUI_home_home_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./SellerUI/home/home.component */ "wrd7");
/* harmony import */ var _SellerUI_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./SellerUI/my-profile/my-profile.component */ "BcYC");
/* harmony import */ var _SellerUI_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./SellerUI/add-product/add-product.component */ "MF6t");
/* harmony import */ var _SellerUI_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./SellerUI/view-product/view-product.component */ "Zjfa");
/* harmony import */ var _SellerUI_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./SellerUI/order-history/order-history.component */ "RpJL");






//Login and Registration







































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _Home_Landing_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
            // Login and Registration
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDividerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_34__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_35__["RegisterComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_36__["SignupComponent"], _SellerUI_home_home_component__WEBPACK_IMPORTED_MODULE_37__["HomeComponent"], _SellerUI_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_38__["MyProfileComponent"], _SellerUI_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_39__["AddProductComponent"], _SellerUI_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_40__["ViewProductComponent"], _SellerUI_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_41__["OrderHistoryComponent"], _BuyerProductListUi_buyer_product_buyer_product_component__WEBPACK_IMPORTED_MODULE_15__["BuyerComponent"],
        _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_16__["ProductDescriptionComponent"],
        _Home_Landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
        _Home_Landing_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
        _Home_Landing_home_section_home_section_component__WEBPACK_IMPORTED_MODULE_19__["HomeSectionComponent"],
        _Store_Recommendation_recommendation_body_recommendation_body_component__WEBPACK_IMPORTED_MODULE_22__["RecommendationBodyComponent"],
        _finalcartui_cart_cart_component__WEBPACK_IMPORTED_MODULE_23__["CartComponent"],
        _Home_Landing_After_Loggedin_footer_loggedin_footer_loggedin_component__WEBPACK_IMPORTED_MODULE_24__["FooterLoggedinComponent"],
        _Home_Landing_After_Loggedin_header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_25__["HeaderLoggedinComponent"],
        _Home_Landing_After_Loggedin_home_section_loggedin_home_section_loggedin_component__WEBPACK_IMPORTED_MODULE_26__["HomeSectionLoggedinComponent"],
        _SellerUI_image_image_component__WEBPACK_IMPORTED_MODULE_27__["ImageComponent"],
        _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_29__["FAllComponent"],
        _Header_Footer_h_all_h_all_component__WEBPACK_IMPORTED_MODULE_30__["HAllComponent"],
        _Medicine_order_ui_order_home_ui_order_home_ui_component__WEBPACK_IMPORTED_MODULE_31__["OrderHomeUiComponent"],
        _search_pipe__WEBPACK_IMPORTED_MODULE_32__["SearchPipe"],
        _Header_for_login_register_login_header_login_header_component__WEBPACK_IMPORTED_MODULE_33__["LoginHeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _Home_Landing_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
        // Login and Registration
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDividerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponent1"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"],
                    _BuyerProductListUi_buyer_product_buyer_product_component__WEBPACK_IMPORTED_MODULE_15__["BuyerComponent"],
                    _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_16__["ProductDescriptionComponent"],
                    _Home_Landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                    _Home_Landing_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
                    _Home_Landing_home_section_home_section_component__WEBPACK_IMPORTED_MODULE_19__["HomeSectionComponent"],
                    _Store_Recommendation_recommendation_body_recommendation_body_component__WEBPACK_IMPORTED_MODULE_22__["RecommendationBodyComponent"],
                    _finalcartui_cart_cart_component__WEBPACK_IMPORTED_MODULE_23__["CartComponent"],
                    _Home_Landing_After_Loggedin_footer_loggedin_footer_loggedin_component__WEBPACK_IMPORTED_MODULE_24__["FooterLoggedinComponent"],
                    _Home_Landing_After_Loggedin_header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_25__["HeaderLoggedinComponent"],
                    _Home_Landing_After_Loggedin_home_section_loggedin_home_section_loggedin_component__WEBPACK_IMPORTED_MODULE_26__["HomeSectionLoggedinComponent"],
                    _SellerUI_image_image_component__WEBPACK_IMPORTED_MODULE_27__["ImageComponent"],
                    _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_29__["FAllComponent"],
                    _Header_Footer_h_all_h_all_component__WEBPACK_IMPORTED_MODULE_30__["HAllComponent"],
                    _Medicine_order_ui_order_home_ui_order_home_ui_component__WEBPACK_IMPORTED_MODULE_31__["OrderHomeUiComponent"],
                    _search_pipe__WEBPACK_IMPORTED_MODULE_32__["SearchPipe"],
                    _Header_for_login_register_login_header_login_header_component__WEBPACK_IMPORTED_MODULE_33__["LoginHeaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _Home_Landing_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
                    // Login and Registration
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDividerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZWJo":
/*!********************************************************!*\
  !*** ./src/app/Service/product-description.service.ts ***!
  \********************************************************/
/*! exports provided: ProductDescriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDescriptionService", function() { return ProductDescriptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProductDescriptionService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://apnapharmacy.stackroute.io";
    }
    getProduct(productId) {
        return this.http.get(this.baseUrl + "/product-service/product/" + productId);
    }
}
ProductDescriptionService.ɵfac = function ProductDescriptionService_Factory(t) { return new (t || ProductDescriptionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductDescriptionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductDescriptionService, factory: ProductDescriptionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDescriptionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Zjfa":
/*!*****************************************************************!*\
  !*** ./src/app/SellerUI/view-product/view-product.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductComponent", function() { return ViewProductComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Service_seller_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/seller-service.service */ "TJLO");
/* harmony import */ var _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Header&Footer/f-all/f-all.component */ "kTK9");








function ViewProductComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewProductComponent_div_69_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const x_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.deleteProduct(x_r1.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Delete Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](x_r1.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](x_r1.productPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](x_r1.productBrand);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](x_r1.productCategory);
} }
class ViewProductComponent {
    constructor(route, router, service, _document) {
        this.route = route;
        this.router = router;
        this.service = service;
        this._document = _document;
        this.productArray = [];
        this.sellerEmail = localStorage.getItem("email");
    }
    ngOnInit() {
        // this.service.getProduct(JSON.parse(this.sellerEmail)).subscribe(x=>{
        //   console.log(x);
        //   this.productArray=x;
        // },
        // (error)=>{
        //   console.log(error);
        // });
        this.getProduct();
    }
    getProduct() {
        this.service.getProduct(JSON.parse(this.sellerEmail)).subscribe(x => {
            console.log(x);
            this.productArray = x;
        }, (error) => {
            console.log(error);
        });
    }
    deleteProduct(productId) {
        console.log("jaat", productId);
        this.service.deleteProduct(productId).subscribe((data) => {
            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Deleted Product Successfully");
            // this.router.navigate(["/view-product"]);
            // this._document.defaultView.location.reload();
        }, (error) => {
            console.log(error);
            console.log("bas yehi challa h ");
        });
    }
}
ViewProductComponent.ɵfac = function ViewProductComponent_Factory(t) { return new (t || ViewProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Service_seller_service_service__WEBPACK_IMPORTED_MODULE_4__["SellerServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
ViewProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewProductComponent, selectors: [["app-view-product"]], decls: 71, vars: 1, consts: [[1, "z"], [1, "c"], [1, "container", 2, "padding", "40px"], ["src", "/assets/image/ApnaPharmacyLogo.jpeg", 1, "logoClass2"], [1, "row", "align-items-center"], ["id", "navBrand", 1, "order-lg-center", "col-lg-6", "col-sm-3", "col-3"], ["href", "http://localhost:4200", 1, "navbar-brand", 2, "font-family", "sans-serif", "text-align", "right"], [1, "box4"], [1, "box3"], ["src", "/assets/image/1.ico", "height", "20px"], ["routerLink", "/app-header-loggedin", "routerLinkActive", "active"], ["src", "/assets/image/3.ico", "height", "20px"], ["routerLink", "/view-product", "routerLinkActive", "active"], ["src", "/assets/image/4.ico", "height", "20px"], ["routerLink", "/add-product", "routerLinkActive", "active"], ["src", "/assets/image/7.ico", "height", "20px"], [1, "box"], [1, "box5"], [1, "f"], [1, "container-fluid"], [1, "row"], [1, "col-xl-3", "col-sm-6", "col-12", "mb-4"], [1, "card"], [1, "card-body"], [1, "d-flex", "justify-content-between", "px-md-1"], [4, "ngFor", "ngForOf"], ["id", "box", 1, "row"], [1, "col-xl-3", "col-sm-6", "col-12", "mb-4", 2, "margin-top", "0.5%"], [1, "d-flex", "justify-content-between", "px-md-1", 2, "height", "80px"], [2, "margin-top", "10%", "margin-left", "40%"], ["type", "button", 3, "click"]], template: function ViewProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "APNA PHARMACY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "View Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "View Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, ViewProductComponent_div_69_Template, 32, 4, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "app-f-all");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productArray.slice().reverse());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_5__["FAllComponent"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    border:1px solid black;\n}\n.f[_ngcontent-%COMP%]{\n    text-align: center;\n    border-bottom: 2px solid black;\n}\n.z[_ngcontent-%COMP%]{\n    margin: 0;\n    padding: 0;\n}\n.box[_ngcontent-%COMP%]{\n    position: absolute;\n    margin-left: 10%;\n    margin-right: 0%;\n    height: 620px;\n    width: 90%;\n    border: 2px solid black;\n    background-image: url('/assets/image/map.ico');\n}\n.c[_ngcontent-%COMP%]{\n    display: flex;\n    border: 2px solid black;\n    width: 100%;\n}\n.box1[_ngcontent-%COMP%]{\n    height: 100%;\n    background-color: white;\n}\n.box2[_ngcontent-%COMP%]{\n    height: 100%;\n    color: aquamarine;\n    margin-left: 40%;\n    \n    margin-top: 2%;\n    \n}\n.box4[_ngcontent-%COMP%]{\n    display: flex;\n    border: 2px solid black;\n    height: 80%;\n    width: 100%;\n}\n.box3[_ngcontent-%COMP%]{\n    height: 620px;\n    width: 10%;\n    background-color: aliceblue;\n}\n.box3[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    margin-left: 5%;\n}\n.box5[_ngcontent-%COMP%]{\n    margin: 20px;\n    padding: 20px;\n    border: 2px solid black;\n    border-radius: 40px;\n    background-color: white;\n}\n.box6[_ngcontent-%COMP%]{\n    background-color: aquamarine;\n}\n#box[_ngcontent-%COMP%]{\n    border-bottom: 0.1px solid rgb(234, 228, 228);\n    margin-top: 1%;\n}\n.header_pharmacy_logo[_ngcontent-%COMP%]{\n    -o-object-fit: contain;\n       object-fit: contain;\n    width: 100px;\n    margin: 12px 20px 0px 2px;\n  }\n\n#searchfull[_ngcontent-%COMP%] {\n    width: 50%;\n    align-content: center;\n  }\n.logoClass2[_ngcontent-%COMP%] {\n    height: 4rem;\n    position: absolute;\n    left: 5px;\n    top :10px;\n  }\n#navBrand[_ngcontent-%COMP%] {\n    width: 10rem;\n    position: absolute;\n    margin-left: 33rem;\n    \n  }\n#Features[_ngcontent-%COMP%] {\n    width: 35rem;\n    position: absolute;\n    margin-left: 65rem;\n    \n    \n  }\n.MyNav[_ngcontent-%COMP%] {\n    \n    background-color: aliceblue;\n  }\nheader[_ngcontent-%COMP%] {\n    background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpsyluJKA7Q557c4jRCyqxlTUbP3Km0R4IBhBF3plBQ&s\");\n  \n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDViwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksNkNBQTZDO0lBQzdDLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHNCQUFtQjtPQUFuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjtBQUNBOzs7S0FHRztBQUNIO0lBQ0UsVUFBVTtJQUNWLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztFQUNYO0FBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjs7RUFFcEI7QUFDQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCOzs7RUFHcEI7QUFDQTtJQUNFO3lCQUNxQjtJQUNyQiwyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLDZIQUE2SDs7O0VBRy9IIiwiZmlsZSI6InZpZXctcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG50YWJsZSwgdGgsIHRkIHtcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xufVxuLmZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cbi56e1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLmJveHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xuICAgIGhlaWdodDogNjIwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2UvbWFwLmljbycpO1xufVxuLmN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5ib3gxe1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5ib3gye1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogYXF1YW1hcmluZTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDMwJTsgKi9cbn1cbi5ib3g0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYm94M3tcbiAgICBoZWlnaHQ6IDYyMHB4O1xuICAgIHdpZHRoOiAxMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuLmJveDMgZGl2e1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5ib3g1e1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYm94NntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xufVxuI2JveHtcbiAgICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCByZ2IoMjM0LCAyMjgsIDIyOCk7XG4gICAgbWFyZ2luLXRvcDogMSU7XG59XG4uaGVhZGVyX3BoYXJtYWN5X2xvZ297XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiAxMnB4IDIwcHggMHB4IDJweDtcbiAgfVxuICAvKiAubmF2YmFyLWJyYW5kIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgfSAqL1xuICAjc2VhcmNoZnVsbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmxvZ29DbGFzczIge1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcCA6MTBweDtcbiAgfVxuICAjbmF2QnJhbmQge1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDMzcmVtO1xuICAgIFxuICB9XG4gICNGZWF0dXJlcyB7XG4gICAgd2lkdGg6IDM1cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogNjVyZW07XG4gICAgXG4gICAgXG4gIH1cbiAgLk15TmF2IHtcbiAgICAvKiBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICB9XG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUndwc3lsdUpLQTdRNTU3YzRqUkN5cXhsVFViUDNLbTBSNElCaEJGM3BsQlEmc1wiKTtcbiAgXG4gICAgXG4gIH1cbiAgXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-view-product',
                templateUrl: './view-product.component.html',
                styleUrls: ['./view-product.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_Service_seller_service_service__WEBPACK_IMPORTED_MODULE_4__["SellerServiceService"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "aoUv":
/*!******************************************************************************************!*\
  !*** ./src/app/Home-Landing-After-Loggedin/header-loggedin/header-loggedin.component.ts ***!
  \******************************************************************************************/
/*! exports provided: HeaderLoggedinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLoggedinComponent", function() { return HeaderLoggedinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Header_Footer_h_all_h_all_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Header&Footer/h-all/h-all.component */ "OKSz");
/* harmony import */ var _home_section_loggedin_home_section_loggedin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home-section-loggedin/home-section-loggedin.component */ "ma8H");
/* harmony import */ var _footer_loggedin_footer_loggedin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer-loggedin/footer-loggedin.component */ "njMl");





class HeaderLoggedinComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderLoggedinComponent.ɵfac = function HeaderLoggedinComponent_Factory(t) { return new (t || HeaderLoggedinComponent)(); };
HeaderLoggedinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderLoggedinComponent, selectors: [["app-header-loggedin"]], decls: 3, vars: 0, template: function HeaderLoggedinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-h-all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home-section-loggedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer-loggedin");
    } }, directives: [_Header_Footer_h_all_h_all_component__WEBPACK_IMPORTED_MODULE_1__["HAllComponent"], _home_section_loggedin_home_section_loggedin_component__WEBPACK_IMPORTED_MODULE_2__["HomeSectionLoggedinComponent"], _footer_loggedin_footer_loggedin_component__WEBPACK_IMPORTED_MODULE_3__["FooterLoggedinComponent"]], styles: [".header_pharmacy_logo[_ngcontent-%COMP%]{\n    -o-object-fit: contain;\n       object-fit: contain;\n    width: 100px;\n    margin: 12px 20px 0px 2px;\n  }\n  \n  #searchfull[_ngcontent-%COMP%] {\n    width: 50%;\n    align-content: center;\n  }\n  .logoClass2[_ngcontent-%COMP%] {\n    height: 4rem;\n    position: absolute;\n    left: 5px;\n    top :10px;\n  }\n  #navBrand[_ngcontent-%COMP%] {\n    width: 10rem;\n    position: absolute;\n    margin-left: 33rem;\n    \n  }\n  #Features[_ngcontent-%COMP%] {\n    width: 35rem;\n    position: absolute;\n    margin-left: 56rem;\n    \n    \n  }\n  .MyNav[_ngcontent-%COMP%] {\n    \n    background-color: aliceblue;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1sb2dnZWRpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQW1CO09BQW5CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0VBQzNCO0VBQ0E7OztLQUdHO0VBQ0g7SUFDRSxVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0VBQ1g7RUFDQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCOztFQUVwQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7OztFQUdwQjtFQUNBO0lBQ0U7eUJBQ3FCO0lBQ3JCLDJCQUEyQjtFQUM3QiIsImZpbGUiOiJoZWFkZXItbG9nZ2VkaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfcGhhcm1hY3lfbG9nb3tcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW46IDEycHggMjBweCAwcHggMnB4O1xuICB9XG4gIC8qIC5uYXZiYXItYnJhbmQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICB9ICovXG4gICNzZWFyY2hmdWxsIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAubG9nb0NsYXNzMiB7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wIDoxMHB4O1xuICB9XG4gICNuYXZCcmFuZCB7XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMzNyZW07XG4gICAgXG4gIH1cbiAgI0ZlYXR1cmVzIHtcbiAgICB3aWR0aDogMzVyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA1NnJlbTtcbiAgICBcbiAgICBcbiAgfVxuICAuTXlOYXYge1xuICAgIC8qIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNDBweDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIH1cbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderLoggedinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-loggedin',
                templateUrl: './header-loggedin.component.html',
                styleUrls: ['./header-loggedin.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "b+4D":
/*!*********************************************************!*\
  !*** ./src/app/Home-Landing/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 70, vars: 0, consts: [[1, "footer_area", "section_padding_130_0", 2, "background-color", "aliceblue"], [1, "container"], [1, "row"], [1, "col-12", "col-sm-6", "col-lg-4"], [1, "single-footer-widget", "section_padding_0_130"], [1, "footer-logo", "mb-3"], [1, "copywrite-text", "mb-5"], [1, "mb-0"], [1, "col-12", "col-sm-6", "col-lg"], [1, "widget-title"], [1, "footer_menu"], ["href", "#"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Apna Pharmacy is your single go to place to find all type of medicines in a convenient manner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A9 2022-2023 ApnaPharmacy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Corporate Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Terms & Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Term & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Help & Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Call Centre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Email Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Term & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Help Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{margin-top:30px;}\n.footer_area[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n    overflow: hidden;\nwebkit-box-shadow: 0 8px 48px 8px rgba(47, 91, 234, 0.175);\n    box-shadow: 0 8px 48px 8px rgba(47, 91, 234, 0.175);\n    padding:60px;\n}\n.footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin-left: -25px;\n    margin-right: -25px;\n}\n.footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-10[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-11[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-8[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-9[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-auto[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-1[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-10[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-11[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-2[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-5[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-7[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-9[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-auto[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-1[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-10[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-11[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-8[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-9[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-auto[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-1[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-10[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-11[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-12[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-2[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-3[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-5[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-7[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-8[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-9[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-auto[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-1[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-10[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-11[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-12[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-2[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-3[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-4[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-5[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-6[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-7[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-8[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-9[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-auto[_ngcontent-%COMP%] {\n    padding-right: 25px;\n    padding-left: 25px;\n}\n.single-footer-widget[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .copywrite-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #747794;\n    font-size: 1rem;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .copywrite-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .single-footer-widget[_ngcontent-%COMP%]   .copywrite-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #3f43fd;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .widget-title[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .footer_menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #747794;\n    margin-bottom: 1rem;\n    display: block;\n    font-size: 1rem;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .footer_menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .single-footer-widget[_ngcontent-%COMP%]   .footer_menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #3f43fd;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .footer_menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n}\n.footer_social_area[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n}\n.footer_social_area[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    height: 40px;\n    text-align: center;\n    width: 40px;\n    display: inline-block;\n    background-color: #f5f5ff;\n    line-height: 40px;\n    box-shadow: none;\n    margin-right: 10px;\n}\n.footer_social_area[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    line-height: 36px;\n}\n.footer_social_area[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .footer_social_area[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #ffffff;\n}\n@keyframes bi-cycle {\n    0% {\n        left: 0;\n    }\n    100% {\n        left: 100%;\n    }\n}\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUssZUFBZSxDQUFDO0FBQ3JCO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEIsMERBQTBEO0lBQ3RELG1EQUFtRDtJQUNuRCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzRUksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUVqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxjQUFjO0FBQ2xCO0FBV0E7SUFDSTtRQUNJLE9BQU87SUFDWDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZCIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7bWFyZ2luLXRvcDozMHB4O31cbi5mb290ZXJfYXJlYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbndlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA0OHB4IDhweCByZ2JhKDQ3LCA5MSwgMjM0LCAwLjE3NSk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggNDhweCA4cHggcmdiYSg0NywgOTEsIDIzNCwgMC4xNzUpO1xuICAgIHBhZGRpbmc6NjBweDtcbn1cbi5mb290ZXJfYXJlYSAucm93IHtcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjVweDtcbn1cbi5mb290ZXJfYXJlYSAucm93IC5jb2wsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTEsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTEwLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC0xMSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtMTIsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTIsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTMsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTQsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTUsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTYsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTcsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTgsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTksXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLWF1dG8sXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLWxnLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy0xLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy0xMCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbGctMTEsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLWxnLTEyLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy0yLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy0zLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy00LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy01LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy02LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy03LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy04LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy05LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy1hdXRvLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1tZCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtMSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtMTAsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLW1kLTExLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1tZC0xMixcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtMixcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtMyxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtNCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtNSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtNixcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtNyxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtOCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtOSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtYXV0byxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtc20sXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTEsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTEwLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1zbS0xMSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtc20tMTIsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTIsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTMsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTQsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTUsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTYsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTcsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTgsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTksXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLWF1dG8sXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXhsLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC0xLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC0xMCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wteGwtMTEsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXhsLTEyLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC0yLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC0zLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC00LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC01LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC02LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC03LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC04LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC05LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC1hdXRvIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLnNpbmdsZS1mb290ZXItd2lkZ2V0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbn1cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCAuY29weXdyaXRlLXRleHQgYSB7XG4gICAgY29sb3I6ICM3NDc3OTQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuLnNpbmdsZS1mb290ZXItd2lkZ2V0IC5jb3B5d3JpdGUtdGV4dCBhOmhvdmVyLFxuLnNpbmdsZS1mb290ZXItd2lkZ2V0IC5jb3B5d3JpdGUtdGV4dCBhOmZvY3VzIHtcbiAgICBjb2xvcjogIzNmNDNmZDtcbn1cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCAud2lkZ2V0LXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uc2luZ2xlLWZvb3Rlci13aWRnZXQgLmZvb3Rlcl9tZW51IGxpIGEge1xuICAgIGNvbG9yOiAjNzQ3Nzk0O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuLnNpbmdsZS1mb290ZXItd2lkZ2V0IC5mb290ZXJfbWVudSBsaSBhOmhvdmVyLFxuLnNpbmdsZS1mb290ZXItd2lkZ2V0IC5mb290ZXJfbWVudSBsaSBhOmZvY3VzIHtcbiAgICBjb2xvcjogIzNmNDNmZDtcbn1cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCAuZm9vdGVyX21lbnUgbGk6bGFzdC1jaGlsZCBhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZm9vdGVyX3NvY2lhbF9hcmVhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbn1cbi5mb290ZXJfc29jaWFsX2FyZWEgYSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZmY7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmZvb3Rlcl9zb2NpYWxfYXJlYSBhIGkge1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xufVxuLmZvb3Rlcl9zb2NpYWxfYXJlYSBhOmhvdmVyLFxuLmZvb3Rlcl9zb2NpYWxfYXJlYSBhOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJpLWN5Y2xlIHtcbiAgICAwJSB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBiaS1jeWNsZSB7XG4gICAgMCUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICB9XG59XG5vbCBsaSwgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbm9sLCB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "bk4f":
/*!*********************************************************************!*\
  !*** ./src/app/Home-Landing/home-section/home-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomeSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSectionComponent", function() { return HomeSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_Service_buyer_product_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/buyer-product-service.service */ "5hKM");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _SellerUI_image_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../SellerUI/image/image.component */ "YNNg");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");











class HomeSectionComponent {
    constructor(service) {
        this.service = service;
        this.Productsmodel = [];
    }
    ngOnInit() {
        this.service.getAllProduct().subscribe((x) => {
            console.log(x);
            this.Productsmodel = x;
        });
    }
    loginFirst() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("You need to login first!!");
    }
}
HomeSectionComponent.ɵfac = function HomeSectionComponent_Factory(t) { return new (t || HomeSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_buyer_product_service_service__WEBPACK_IMPORTED_MODULE_2__["BuyerProductServiceService"])); };
HomeSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeSectionComponent, selectors: [["app-home-section"]], decls: 224, vars: 18, consts: [["color", "white", 2, "margin-top", "20px"], [1, "example-spacer"], [1, "container-fluid", 2, "display", "flex"], ["matRipple", "", 1, "mat-elevation-z2"], [1, "row"], [1, "col-md-auto", 2, "position", "fixed", "left", "10px"], ["src", "https://newassets.apollo247.com/pub/media/catalog/category/home_essentials_22oct.png", "width", "40px", "height", "40px;", "padding", "20px;"], [1, "col-md-auto"], ["src", "https://newassets.apollo247.com/pub/media/catalog/category/h_and_n.png", "width", "40px", "height", "40px;", "padding", "20px;"], ["src", "https://newassets.apollo247.com/pub/media/catalog/category/baby_care_22oct.png", "width", "40px", "height", "40px;", "padding", "20px;"], [1, "col-md-auto", 2, "margin-top", "10px"], ["src", "https://newassets.apollo247.com/pub/media/catalog/category/women_care_22oct.png", "width", "40px", "height", "40px;", "padding", "20px;"], ["src", "https://newassets.apollo247.com/pub/media/catalog/category/logo.jpg", "width", "40px", "height", "40px;", "padding", "20px;"], ["src", "https://newassets.apollo247.com/pub/media/catalog/category/ayurveda.jpg", "width", "40px", "height", "40px;", "padding", "20px;"], ["color", "white", 2, "margin-top", "10px"], [1, "mat-elevation-z3"], [3, "image"], ["id", "p-name"], ["id", "p-price", 1, "mt-2"], [2, "margin-top", "0.5px"], ["mat-stroked-button", "", "color", "warn", 2, "margin-left", "35px"], ["routerLink", "/login", "routerActiveLink", "active", 2, "text-decoration", "none", "color", "#f44336", 3, "click"], ["mat-card-image", "", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCv91DQhZ9Mguj5oEFBP8bqn6Dpw057ZMag&usqp=CAU", "height", "100px", 1, "shopImages"], ["mat-card-image", "", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwfgp96Qr1HCQNoDuaE76-BorQzH9UPASrpA&usqp=CAU", "height", "100px", 1, "shopImages"], ["mat-card-image", "", "src", "https://images.unsplash.com/photo-1642055514517-7b52288890ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBoYXJtYWN5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "height", "100px", 1, "shopImages"], ["mat-card-image", "", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpu8uhLohPc654dRyN4i7lBHPcHiY4Y4vWFU7by7N&s", "height", "100px", 1, "shopImages"], ["mat-card-image", "", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1t2E8rodMFVfPgVXnSu1VENqixc-7Ez7EQ&usqp=CAU", "height", "100px", 1, "shopImages"], ["mat-card-image", "", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqucYpn1bHG3bCvC3yPtVOhP37LwvTbET0Nw&usqp=CAU", "height", "100px", 1, "shopImages"], ["matRipple", "", 1, "mat-elevation-z1"], ["src", "https://newassets.apollo247.com/pub/media/ves/brand/GNCn.jpg", "width", "100%", "height", "100%;", "padding", "30px;"], ["src", "https://walnutfolks.com/wp-content/uploads/2020/10/pasted-image-0-7-2.png", "width", "100%", "height", "100%", "justify-content", "center", "padding", "30px;"], ["src", "https://newassets.apollo247.com/pub/media/ves/brand/onetouch_21oct.png", "width", "100%", "height", "100%;", "padding", "30px;"], ["src", "https://newassets.apollo247.com/pub/media/ves/brand/friends.jpg", "width", "100%", "height", "100%;", "padding", "30px;"], ["src", "https://newassets.apollo247.com/pub/media/ves/brand/nivea_21oct.png", "width", "100%", "height", "100%;", "padding", "30px;"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUsAAACYCAMAAABatDuZAAAA51BMVEX////m5ubl5eUBZGvk5OT8/Pz39/fq6urv7+/09PTs7Oz29vbufg4AX2b1+Prw8/UAWmLucQDuxaj30LPqz8D74dMAV1/uewCTsLLudwB4naAZanDugxyvw8U/en+jubu7zM3S2Nl8n6M6eH1aiY4AUFiJpKVzlpues7SovsC5xshmjpLz2crI1NXm6+69yssASVLojkEqcHXn4t1OgIXZ4+TvoWbujDcAP0ntmlrpvZ3rkkjqpG9eiY7q3dPqqHnosIP1wpvry7TksZDpgiXm29Tgx7X67ubjq4TxpGrxsoT21sH86+CHtmsLAAAbmklEQVR4nO1diWLbNhIlKB4gGVp0DkqyLOuwJdlWRCeKma5zNmmy6bb9/+9ZDEACIAgeOpykrdHuFqbwCPJpAMwMBiPDgIJNhJBLqy6pmZhWLagGULOhatlQDaCpKVC+FuVQlMlRHlQRR5kSylNQDkUZCsoXKNQG5QoUVlD0ZUxbQUkU+OJlzEoKSiiXPegDlw9cPnD5T+fSMk0ruwTVjBWTVLMbQZXdiFabUI5AsfeDKvsGfGiasQKfewrKUVBoX1TGioKyFdQBKDAwFM8hJaDVAKoerTpKVTR1mlBYhwr2RXnboppeZjdUFQXs+6pjHhpkzJuVwmcrwkdRvkCpYqSKbD6QOWob4atG6YTPdAVKFVm7CeUKlEZk0Q+cFFXUtpNiDcrWomomRXUqrZoU61aTBy4Px+WWY9zcaYybO43WWpS50xgXL7PNGK+moEicD8WzYQ6lVajYHq3CRRtDDYsqbWrTz4NWKLUDigq2Rjm7ouytUY5A2RyFm1EGY/576ERWWSeymhcYq6wTbYnKhM9qENkD6ESZFD/o6g92zz+JS/OBy5INSUo+7EnJWIGSzXxQsskCyhYo9n6i6kMtn/lI8RSUo6CQijIVlN0KZTWgal4maEkB/b4Qa02rrDUSYoQKAxmJ76uE8qpRnkAxwhCXDYpyq1F2E8oXj4WqUUYrlEKBKR5LjypSgFpIMdcUdQNZoLzq4V8akgqqaSBbEspog7IllH4gm6hCV9dTkOuXD3bPgw15r1xWyuU92pBFJ0lbP1GDu7HCT7Sva7ONkzK3IRsU8mo/UTXKowXTf1kV51XseaKqv9qEguv553nRo3B7VPFz7cPiA6FaUCBQxnbMl0XW16IaRPagTsoGVMmvvqfwVY/ajMsHu+fB7vlJudRrUFZLLhWUVvUsc2k2K5Fmmcs2qCYu8zFeYKWM0nOpRZExbkPBLik+rfpQxbQKNTeAmkOrDlQ9WtWiPC3K1qGwFuW0Qrk6VKCg/G1RNRR4CgVVqO0sznpT3VNQktHdZKrnrs17NtWxgqoxuncx1f+1uroyKX5nu4cNSQ2X2bTLhsHfhcv2do/nIv5e+3OJJ1djXkajpOjbmI7lMvmbcNlGLlE6Go2uRmN/fAUo+2pk1XHZar70zuNIlPm0MPO5o7n0YbziqL//fImuNptouNngeH5Frq3n89SsQbVax42zsCNKtPZllLGOpA/DlbfzOt4O9T3XcT+wwzWhK9qcYTdYnUdp3TrOZb9Ov1S4vCkuMAqX5LJWvzRLy1IrTfHH6pcmDq9JB/NRPEV+PI4To0a/5JfqVipVLuu5/EfZPRmX6dnMG3fQnHK5lw1ZLZfo38LlKHTOFm4bLhucJBVymXl8SmMcfDfO39dP5MsU5Fw60dWLqcW4rPIT5S494YbDws+XV22Fy0JT56bA5XubXDx6/SGQb6BWtRcbq/eO0lDghesgcIjqsoxubTRPg2pUK7+65d3KXMbTgpPSHUlcRp0JiMbpL/4/xa8+X3uW++LGT/8zMbr/maIaVCtd3TtTuZR0dfc65zKMhmPSkf3m+Pi/7s+uq7e3ewgK53aPu7fdU88lk8swis+usY+M548GvZfJP8LuqfsGtuJS0qAa5TKMOmfj1HeT5Ond4NGj46eogct/7P54Fn5gii8FCblEOrk0xY1MdxSf99fksZ0kefN20Hv0qPfuCLkVcRuSrEgRGDXRHraKMjiKvRSE3rvauA09qinawywNTS3K1BFnNDspVf3SLKC6DswjSfL8zSkw+aj30nfsZ98hnmjxHspquVyN1L5+SDwRu7SX3UNK8uHpx0cDMrqByt4HZPz67Tvo6mdhVuKxfV+6evMMeDi7p2sc/fXpY69HJTKjMkkeP7K/C5f5E/1tuYwzLrtJYn7+7e2XAecxp/LD4LXxr+WyIVhb4pLokKspu9HTj3dEHAWPp0DlW4SSD73BY6OkkB8+Xl3m8meIV2fHAZzCIQJHnDdw6MkBJ3/qML5dg8/zyH38+pHMIyXytHf8EdvG50Hv+JVy+sIpnG2QTkSU+qKH5Wz1sXSogHMZ9r3WqMKJiAOinJZn+DIbMhouUvg8+PTLsTyuMyofDV4+T5DxpkekMzH3P9/TJLL4jA+WPtaiSsJnmvd5vgdVzgiq3RMNL32Mjuwnd4UJ8pT+A0ye/pag5NVbspoPGnX1Q9g9XplLZVL8GfchPdA+LomBmHz9+KUgkaf5kjP45YlHqPwvjPvey26rBWZPLjVy+WO5bDfGz+ILbLjJ87eDXkEgcyJ7H4luHsDnVEKfdcVovb9zuhq53MJPtMUYt1qO8VaHp53NwnDsV3fKJEnFsjcY3D3uHh0dGTj//M7Qns7e7dS5VFUfa8g13sugVQf3fH6cM1+rE914yP14XFR/mEQev34SgOx3n77LP+9ZWuEr60RuQU+xSgIhaTfUsxwUhc8RXBZ0IuSTl+SDypKGf6CKbGEguz5r6vl1Tsq9z/CRNeXlIGcxJ3IwOL37zFDovy+5zA6eJmyiMsg7YcYaURtInffle0TPT5KUzMB8UvSxSy4RlcqVJ0WXXJ30lycXneFmuRwlhjQpHklyKXR1ZzqeLU9uh53zk9loSnog3fpJMoWSkh7ySdGDB6BXk4R+hdPxYrXcdDYXy9mNhSVvzIHjL5OnveLwJiP7l9++krcnXP31+O0pZ/J08HtCXvWSlP4CypTKNa3DRRubvtXfhDEp4WZm+V4mrZe3w4hcGl6MkM+DT/zR+2EcgckNs2IYxZtFF9dwmYzPOnl78n9RdDaGqJ3JCxYrAZ1m72VczMkf9OqLsZH2z0jjvJswCm+v7otLon7LY5sQ9+vnb0YXJQl6/sdbriLBagRUkiWWPhh1O9CHWsTsryi0sdcP+aZGGC2Yr2pBPuKG1Y2fcbnuRLLxmiFwmUtmQ+JFpLYnd4NYgQt+ORrR90J+zNtsjGUclnDnyY5cNvjcng9kgXz55in9vPv1j9c9SdcEKo8/JfQG8rOT0ud/286ZvNXWiS7Ix2mncC2+ZDNDMClczhG3FrIULvv0YfGFyjy9W5+8IGcuPGNNF7xpvDZuNTgqBdv53Fq0Nr9yqRwMXv8Jr2Emr55+HKhG5Glv8DlhKMHlmHw7eMb/TtTnjlbOKC5e6sxT+pXquQQ6wElpupzLXCfScULImmHpAeI1fVlxt1uM9bj5ldskaVvHXyYvM8oGp7++OoKL3x5/6Q3Kq/rgy4eE9ZnIXJLBx19leFKiJ5qV32RDVekKLjvRkurqbbnsRGvXFdy9h5Zi7zROUAWXnShtNQNuYfckvxGxPCUy+eUzSlDXcJ7c9VRF85TOon+Qx1ova7ns6EZT+VJ87eZcwgoCq0Yk8Rr71VyGbIkpzJxD7F9xeARD55y7RZaGiTMcKwIXXhyYS/RhwObJ38lKkyRP3w10bg3C7js/cb1xvCyN8QKX7Up4ghmXUXS+GFNtJh0PxRcyc7RcLgkTF+NJkqbp9GYhvqToGgn2yOQqhZqEHuUy6sxGa6o5Xa/Elxb7W3HZaEMmr4G6wd03YkNav/eKS81pzuSXT44R4OltFJblktiFRS7Jml3iNiyuwOcQSRNM5iNiurq5jSzmhyFo4WUu+5trjO3sVTESPrmlL9NnGytO7CVp6m/O6CTK1m0vlR6ezZctXZsBlMxKIrXMNAp4NaBiOfh81O26vw/Een56yiklts/nbtdz8EkcksemOPE4V3YQ2AuZqGg1vrwtLjdhOLvun0ujeOiRp/GmPlg7/Flsvk7HlhM4nqQTsQap7Ugv44hvdGhgh4OjUSq+FOjASQ1HUBAEnPZwFeRsZIZika0icYaRM18Rm3X0v96jwctXZHh/6g2K4zob23ePbcN38fqEaboQm2VW60Tk8W88Fxs3BXYXxL7x5ZlgCLqYRwTSlLZ7Pb4WRROjYENeFmxIPiS5+MVkLrM4gWf8ceKRy61BxOPyPf4YG/+AZ/gQJkL5B7Ehv34R6rrkH/ry2zeKGt1mY5TGDKIaLqMbnzrWJFENZ0wpNiTCKZcwKWI7Wa8ntKz5AkLvqrchDTydZCW9lbnUTNrhmZejAmyuOY7fuIMPaPe4jweD34gN+eZYWbmJkv7o4+dXSZc0nM7EbNfEZXjiMSelI43yo8yuE/xmXLr4etmJRbB84a4lu4e8nzN6L8XOC6US1li/xGU8dTNWuuNbKehefKW7cFnloeveHX8iN/ofd2zA/wa949N3n//qZkFDk7n0kE1jPJqizEl5ziHL3HfTV7j0boYlI1LcVRrjfZt5QcclI5JzSV5wpKir4QXORusi1uOGuIV3VznDx3aHlCrUkuM3pAlz8TLL5rh39/ufPmyg5U2VWFbYdZLXHsN25AFtZyjBJSGGbT/JXMI5AGepGkQSxLY9mUu4qbnR6/akAe01OC8SFrq0W2PaqcJ1PJpoDJ6FbZDRwwXsYUvENelE314mppvZPWQR+nL3+ANflkoxg/T5NDqRJetEBkNZ0g7DZTZvY4lLn6ghF5WvSDUtVSdK9LJF2zPZmRZuSLRUevW6shvyzRtb6EQNuvqfH1Dy+wD0SKJD/vrVpfOjUYpzq+WyOO1TPFG1ZS59VOYSeTPJnUSmPnDSFe6qcGlvxMdRTO0YwWXmRl3JbA9ZlJXwewBmCGaTwuWB7B4bUxOSLDUfnyWJ62InHa1GuvjLApc1dk/OpVfPJXbXwrezukq7ATFm+Oc6LvuC+vE6NcHLy7uIMo+5JdEUjZkfnfMbDi/Xa3+6TpP74dLoUl39+J0Hete0fxHGUXx5CLls4NLHJ5y4hYdyL6d8V7/ApfD8RLnnUdoQYnKJfUF4Z4MpK4mg1zMg1BEZtmi0FZdNPjfvba83eAdKpDPeMNuPWFbCtdlCLq2d5suA3/Uc56GLt4JLZFlFueRzYbigr2pZptDOcy4td8Mv3SA6840k/T+LPEwVLtuHExqFIFIlxtN9Ohj88s1A2Fpwb3jY9wso9Qxfva7u5H2dS02yNF4Sl7aXywvR5FlfrlW8a0G/dIVNdONmYjQWXPLg2CVX3wMas4uFaT7NgtKdpXha6Lddhja/MUdE8hbCrGxrJnkjOJdZaED5DF8tl3lAgcwlC6Su4BI8XxCG4K0quby0ET8ZE135jEthCjJdne5sCC49tgSKqeQm4zLdTldvbUO+6lEdqKC4hX1xSFx/7mw3Ls2irs7nsXgCAuB6C2ldLsklkvzGvg+sBFKgYzWX/iVfes6Ye0JaeXaze6q4/Mq2CQvxl01yeSAuRZ/RyXq9Hsv7RCqXfRtNJdWmv15P+7JfT8clply64qRX2LlM0/VCtg924bLST2Rq4tW5XFpmxRm+Oj+Rk8caFLmkxkGBSwkTFv3dZRtybFv+eafQvqC3xzzQpSiXpFskf0UqrtGG1JzhayjFM3zhpSN/GBTP8K1sOM8m2ZCB5zmyDZnfU3A5zu7nSFx6XqoxR/jcBnfF0jruePa43F48RZD3Krh0sysnYTWuE3jtS7vceMUzfKATbWVDmiX9kvRV0Ik0+qWJFyo54SZvoLUhz1VSopPzvJaPJF9waTGdyPDK7qMx15xsVfj2sCF1586AywZdvYXd02BDkonKV+zxcDgd51xele0eonUXWYlujbxFrl+aBS6zdeFG+c7iJccd1u7ZjUu/mcsmG5L04JxI3rwwPgv8yyjvBat2DynpUHqSkJhLRr7dFl1nL4M1XPo38lZoCHNxjou7h+GycIYvD2mhYS2XhURj7nUsfRixMc7dt3PCpQk7QXlhXFqmd87DZASXvFmHBbpMb1l0UBjF52vDdsf8lVPyenwbdp7tneHxJm8fvZ/6lsHH6iqXyxWEEUF5wbk0XX/WyXHhDGQo/5bCvlGnfSvEqUlDtDk9vP5itpidQJmRyqSA8tdLejVrMAaXqDeajFi5mkIikCvSIPvcyPrCixy1vPGzvkZL0mBBL7JUI+RFRhQ2Ju8CfXl5TCR8PuJlnSUowd4Uupr1RwgTJdPh4ZF+ntYEbEAoZiqnNfHc6Ri6na2xBxTkQZVOm8wuOXFGNic3WJwi+s+GWimYhnUsbsCqkCKJSRy9QTaixLk6trko+hKRhrlbxzKzweUh0yofLacdqKfxYEvSz+w6aZNAOsPHx598XtDl3ZI3EFsLBz/D15yeTJH9dvk2lIwu8hFeQ0F9l3wbefi1oOA+4i8ruXzIf/nwexQ/5DcU9k7nyN4PagdKNKaiSjOfFmU1oA5x5lm7jtckDN0izeg+ica0aUb3TjTWhGqRMLQGRWW/nMjWQpo5mbpTu1z2EQ3FZD5SevFIVNUMBQyF2qCwQHkCZSuoLuKDS0LRzwMFdaRF+brHUlHSuqDVL60d7B7/r2ekPIXy/Fmx+pxWn1VXt0WpTe8JpW36TG36F6fgYDZk95fjf2d5uxWXrfxE/hMoj2kR1SfVVbXpbqiapruhtn2sN39yCtr4iUS8padWRbChdwSlS4uoHlVX1aa7oWqa7oba/rG0bIh4zAJxBhc+qw3z5QNsjb+hQC/+TL9N3HyAdLu8Bgf7DYUHu+fB7vkRv6Gwl1xaO3G5pW+jlGisFZe6c7pV6ckOtT+en9P1fd9lN4KYRa1CnnupaXCieJISlwSTHSjF5KZmXXoy6AurfUmsyCgaSalyCW0lNd4WKMGlNMgyFA2eV7kUqEq5bGVx+vbJyWxMrVvv6mQxqzS63esTUVb0Xpqc4GPeZNatM9WdPm93Q1+9zuiGtjeo1ugmb3GS79PV5AQ3JhcQn31xXfbTHuI3FIJ5GC3pYePgfRR1JDEqTor+pbRfEdvs+yoN5KXY8Zj3neqBbF/whnEnrZ1KsQMbDCcY1eXbIG2iFW7Kt+Gv2B5cGJ+IE+8H/A2FIGJHwYDLsDOs4VLahYoquQzpKW0aWBFf+TVcZg3hzTb1XNKAh6Fby2VAQyEauMRLODhI49fjxQ/nMt/Smtdxubq4uKC77htcz+WSNISI3zit4zKgcVsQ4rYvlxBLE/bRNfQdbcdlGxvS8o8ol1CFhx5W/qiZS7iM1gkcSCSFsWKVVOuTsBO6xFow0g47WFGRngy4HFLLjFTghIA2FQegTBxlW71WTR4Yh4U7ib40Crk7juhJLBviK9j56Nbx6k4x+ZejpgxjVQSH82hbm3QxxFUoCHmMpsTgsknLUlKzrKlH5DKCP3AwI8+b2lXJv6CvDXQARzWiUbYFqUsZRs9yDCEMKU8Zpj4hVBDdvq9LNEbudBl1Yox9bE9fxPO+p0lPVngZqS8jk+KmDDyES7bFDLG5Q1eg/CLqKoL0mKZGZHMbEpsQ8hiB6xC5feBSFtmCXUe/N9rBhN62xoYktxxeR1SQPPEyxSREKKFcNiQa60dwFBV0Is8juu4253uyS00zAuHywoRxa551BJdl/RK4nLgIg19AnxyLxU5QLl2PjN2wy/tStW7KZUpuhW/DcIPr7B4YNzimMcTVujrKuCzql4qmCEcOws5sTRvciw0JSwqLd+g0cUknLrL2AqfVXCZONzDHXNwruczysnQ2aZ0NSRaM6IZmQ9ybSxYUH8bD1WRHLpvHuFT0Y9ySuKQq0cTVjnGLhjXT7yWCZVz0pRvjedms/Zr0ZGTeDS2fzBhRWkpqJsY4cHnS6CdysiDoMN44qGllLozxmixbvsiy5UZc1Qnp4e6KNF40CDJih0HnE21GL3JFiniMpo64QSAyevG1h5FO/jtfV+QBA9SQTEEOTiM4RFGdaIzNl42JxoL+kOXYCYeuoEBB+WXittCJVvRM8PS2UScapeyQMruBXifqRBlFYWpWujZBJ9qATmTBgnBeqRNB3H84NmwaiuXtpxMxVLqgZ7ijBafgAGf4ZF0ddkSRs2rS1WFhxog0rXQGkfkynFrWNCH3YiZAta6+oR1AgGGI1aTAOQpLh0jitXiZXXR1N3fMTEFZH3IKfozdE0+bHGvApeVCB8NGu4dx6YMalVZwKQViwkkpey8u0+FmA9IYIAxSfvhY1u24zOVS7HTruKQoEPJ6e3xok0XDBOWpkkt6FIIl0iGitKnmko5xT++kzLn0Q5pLikxz0Odhz/Axn1tmQ0JTZkNW+dxgvpyk0zUttIHG5wY2JPygnWFcguJf6XNj8yWE1UPocehUJPeHIR6vp0T5Xa9y3V/rcwO5vJiuaXLBKdJ7zzBRrOIRxEZCpohzTkH7M3yNs6vW7pH2znIU6EQ8WneNtHtnwu7xm+2ezi0pcHyQjE69TmQbMFvSyRzso7DvV+6ddbg2Ep8rfXEKJjFEuvevZqBlXLotVuZt4y/1NiQq7VFcyadl1m6D3eOS5hmXlbp67nMbTkt+9eyE1RpUIZ+inAiOotbo6nxavVX6EhRcsGRd0PUG34fdE4dxxuVZFHWq7Z4x9wVH4byKy1UczhmX1/OQ/oplBZc8TD6KzlK3wu4xTsjtplkGUqLKzKdVXJo8k2QYbSq5tC9yX/D5UfVqsgeX/X5/xN7vilSruUz7/cs+LeQ/U6Tl0ie3GDsMRRpOKrkMRv2sXE09VGVD2mNyOy9DTUm3/JxuSS77oowquTS869WQ2P+r9b38hoJt8cDwAGLEy7EGAiViyI2qWAOU/9wOsb9cKYdvKWoA7lWam5tiDQJUOV+qYfQVv6GAePB9q3ALPl+KUI5Sli21qjbdA1XT9HuiDvMyOapdbJY+PKbWSWnef371ZlRNoMvu+dX3tSEz2S9OpXsHZ6ion/+34w72W+4PXLbgkocKm1KMtSluJAS8EGDMA13EGEdmOTyG2oAKyhEdUFSZFbhVPlp1KLMKZUkoO0cJVsQYF1xylESBHiVHCJkl4thOVKssW6KpTZN3BbujgvaobNOKo9wtUI5A2bujcEuUwZhv9tBZ0rJkaRQCqzH+cpfflbJqf1fKgMN2jb9GlQmf1bwsaSiw7sGG/N5TqaGg/l4xgw9c/mguH+KCt/0NhZ/qDJ+poOxWKKsBdagzfHmWraLRnYee8p0bXzjLEUc5AgXmMyqhXKh6ogNHh3L3QPmyD38XFNKhtqCAE4daSDHXFJFev5QHska/RHr98rv9zrNVfJn6PYqmQOoHu+fBhrxXLivl8h5/h283P5Hk2tzCT9TeSalHmWazQi75ieoORO3iJ9oix9ZDqS/Gdsxrjp02iawQI2FD7uCk3E1kxWMdzEl5f2f4HuyeB7vnR5zhK6ePqFYim1TPMpfVqmd7LrWoshKpcKlzUlapnq3P8EnZOaBuSNk5UDHVCBLpP1xjTxRtakipRhBPGnJIlN+ACgRK+zJ1qDIFB0qck+lERZRkdP8kpjpWUDVG9y6m+r9WV1cmxQe7Zw8u78Hu+ddyeQ9y+TBfHm6+lBYxu7j0HSjR2L7pyUopw/ZNT6ZPNHaA9GQGl+K2+qW1q35ploa/kv9SrynqNsF30C9NE+2gX1ZToNEv/w+5jeT8x8DRxwAAAABJRU5ErkJggg==", "width", "100%", "height", "100%;", "padding", "30px;"], ["id", "backgroundImageCard", 1, "jumbotron", "jumbotron-fluid"], [1, "display-4"], [1, "lead"]], template: function HomeSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Shop By Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home Essentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Health & Nutrition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Baby Care");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Women ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Care");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Covid Essentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Ayurveda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-toolbar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Half Price Store ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-image", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card-content", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionComponent_Template_a_click_64_listener() { return ctx.loginFirst(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "app-image", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-card-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-card-content", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionComponent_Template_a_click_78_listener() { return ctx.loginFirst(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "app-image", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-card-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-card-content", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionComponent_Template_a_click_92_listener() { return ctx.loginFirst(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "app-image", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-card-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-card-content", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionComponent_Template_a_click_106_listener() { return ctx.loginFirst(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "app-image", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-card-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-card-content", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionComponent_Template_a_click_120_listener() { return ctx.loginFirst(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "app-image", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-card-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-card-content", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionComponent_Template_a_click_134_listener() { return ctx.loginFirst(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-toolbar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Nearby Shops ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-card-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "MedPlus Pharmacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Locate US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "mat-card-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "MediPrix pharmacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Locate Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-card-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "MedPlus Pharmacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Locate Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-card-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Medwise Pharmacy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Locate Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "mat-card-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Denchmed Pharmacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " Locate Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "mat-card-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Apollo Pharmacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Locate Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "mat-toolbar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Our Partnered Brands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "mat-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "mat-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "mat-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "mat-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "mat-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "mat-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "mat-toolbar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Apna Pharmacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Widely known as India's no. 1 online E-medicine provider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Being India\u2019s one of the most trusted digital healthcare platforms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Apna Pharmacy has catered to over hundreds of people across various cities.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "P", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Our super quick delivery system ensures no one has to wait for days for their healthcare products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "to arrive at their doorsteps. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "On top of that,exciting discounts and offers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "have made us the household name in the cities we deliver!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.Productsmodel[0].productImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Productsmodel[0].productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.Productsmodel[0].productPrice, "/-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.Productsmodel[2].productImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Productsmodel[2].productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.Productsmodel[2].productPrice, "/-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.Productsmodel[3].productImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Productsmodel[3].productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.Productsmodel[3].productPrice, "/-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.Productsmodel[5].productImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.Productsmodel[5].productName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.Productsmodel[5].productPrice, "/-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.Productsmodel[6].productImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Productsmodel[6].productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.Productsmodel[6].productPrice, "/-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.Productsmodel[7].productImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Productsmodel[7].productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.Productsmodel[7].productPrice, "/-");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _SellerUI_image_image_component__WEBPACK_IMPORTED_MODULE_6__["ImageComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"]], styles: [".row[_ngcontent-%COMP%] {\n    margin-left: 40px;\n    margin-right: 20px;\n    \n}\n.offers[_ngcontent-%COMP%] {\n    \n    \n    height: 100px;\n    background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpsyluJKA7Q557c4jRCyqxlTUbP3Km0R4IBhBF3plBQ&s\");\n    \n}\n.offersClass[_ngcontent-%COMP%] {\n    height: 200px;\n    width: 90%;\n}\n.mat-elevation-z7[_ngcontent-%COMP%]{\n    margin-right: 20px;\n    width: 300px;\n    margin-left: 40px;\n    margin-top: 10px;\n}\n.example-spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n  }\n.example-spacer-buy[_ngcontent-%COMP%] {\n    margin-left: 100px;\n}\n.d-block[_ngcontent-%COMP%] {\n    height: 500px;\n}\n#backgroundImageCard[_ngcontent-%COMP%] {\n    background-image: url(\"https://cdn.pixabay.com/photo/2019/05/25/23/38/doctor-4229348_960_720.jpg\");\n    align-content: center;\n    height: 500px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n}\n.lead[_ngcontent-%COMP%] {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size:x-large;\n}\n.example-spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n  }\n\n.mat-elevation-z3[_ngcontent-%COMP%]{\n    margin-right: 20px;\n    width: 200px;\n    margin-left: 45px;\n    margin-top: 10px;\n    \n    \n}\n#p-name[_ngcontent-%COMP%]{\n    font-size: 15px;\n    text-align: center;\n}\n#p-price[_ngcontent-%COMP%]{\n    font-size: 15px;\n    text-align: center;\n}\n.example-card[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin-bottom: 8px;\n  }\n\n.mat-elevation-z1[_ngcontent-%COMP%]{\n    margin-right: 20px;\n    width: 200px;\n    margin-left: 45px;\n    margin-top: 20px;\n    height: 70px;\n    margin-bottom: 20px;\n  }\n.mat-elevation-z2[_ngcontent-%COMP%]{\n    margin-right: 20px;\n    width: 200px;\n    margin-left: 45px;\n    margin-top: 20px;\n    height: 60px;\n    \n  }\n.halfPriceImages[_ngcontent-%COMP%] {\n    margin-right: 12px;\n   \n    \n  }\n.shopImages[_ngcontent-%COMP%] {\n    \n    width: 185px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7QUFDQTs7O0lBR0ksYUFBYTtJQUNiLDZIQUE2SDs7QUFFakk7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztFQUNoQjtBQUNGO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrR0FBa0c7SUFDbEcscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksbUpBQW1KO0lBQ25KLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztFQUNoQjtBQUVBLHFDQUFxQztBQUNyQztJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjs7O0FBR3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBR0EsMERBQTBEO0FBQzFEO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZOztFQUVkO0FBQ0E7SUFDRSxrQkFBa0I7OztFQUdwQjtBQUNGOztJQUVJLFlBQVk7QUFDaEIiLCJmaWxlIjoiaG9tZS1zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgXG59XG4ub2ZmZXJzIHtcbiAgICBcbiAgICBcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1J3cHN5bHVKS0E3UTU1N2M0alJDeXF4bFRVYlAzS20wUjRJQmhCRjNwbEJRJnNcIik7XG4gICAgXG59XG4ub2ZmZXJzQ2xhc3Mge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejd7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuLmV4YW1wbGUtc3BhY2VyLWJ1eSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG4uZC1ibG9jayB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cbiNiYWNrZ3JvdW5kSW1hZ2VDYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE5LzA1LzI1LzIzLzM4L2RvY3Rvci00MjI5MzQ4Xzk2MF83MjAuanBnXCIpO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubGVhZCB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xufVxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuXG4gIC8qIHNwZWNpYWwgQ1NTIEZPUiBIYWxmIHByaWNlIHN0b3JlICovXG4gIC5tYXQtZWxldmF0aW9uLXoze1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBcbiAgICBcbn1cblxuI3AtbmFtZXtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcC1wcmljZXtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG5cbiAgLyogU3BlY2lhbCBjb2RlIGZvciBTaG9wIGJ5IGNhdGVnb3J5ICBhbmQgc2hvcCBCeSBicmFuZHMgKi9cbiAgLm1hdC1lbGV2YXRpb24tejF7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5tYXQtZWxldmF0aW9uLXoye1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgXG4gIH1cbiAgLmhhbGZQcmljZUltYWdlcyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgXG4gICAgXG4gIH1cbi5zaG9wSW1hZ2VzIHtcbiAgICBcbiAgICB3aWR0aDogMTg1cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-section',
                templateUrl: './home-section.component.html',
                styleUrls: ['./home-section.component.css']
            }]
    }], function () { return [{ type: src_app_Service_buyer_product_service_service__WEBPACK_IMPORTED_MODULE_2__["BuyerProductServiceService"] }]; }, null); })();


/***/ }),

/***/ "c/nc":
/*!*********************************************!*\
  !*** ./src/app/Service/register.service.ts ***!
  \*********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RegisterService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://apnapharmacy.stackroute.io";
    }
    registerApi(data) {
        return this.http.post(this.baseUrl + "/user-service/api/Buyer", data);
    }
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "cfwO":
/*!****************************************************!*\
  !*** ./src/app/finalcartui/cart/cart.component.ts ***!
  \****************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Service_final_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/final-cart.service */ "KYHu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Header_Footer_h_all_h_all_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Header&Footer/h-all/h-all.component */ "OKSz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Header&Footer/f-all/f-all.component */ "kTK9");
/* harmony import */ var _SellerUI_image_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../SellerUI/image/image.component */ "YNNg");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");













function CartComponent_mat_card_16_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quant_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Quantity: ", quant_r3.value, "");
} }
function CartComponent_mat_card_16_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartComponent_mat_card_16_div_11_div_1_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quant_r3 = ctx.$implicit;
    const recipient_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", recipient_r1.key == quant_r3.key);
} }
function CartComponent_mat_card_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-image", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CartComponent_mat_card_16_div_11_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_mat_card_16_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const recipient_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.addMore(recipient_r1.value.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "plus_one");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_mat_card_16_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const recipient_r1 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.removeOne(recipient_r1.value.productId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "mat-divider", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "* Return for this Item is not allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipient_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", recipient_r1.value.productImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipient_r1.value.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipient_r1.value.productDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 5, ctx_r0.carts.productQuantity));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("prize: \u20B9", recipient_r1.value.productPrice, " (Including all taxes)");
} }
class CartComponent {
    constructor(cartService, route, router, _document) {
        this.cartService = cartService;
        this.route = route;
        this.router = router;
        this._document = _document;
        this.email = localStorage.getItem("email");
    }
    // public getCart(email:any) {
    //   return this.cartService.getCart
    // }
    ngOnInit() {
        // this.email= localStorage.getItem("email");
        console.log(this.email);
        this.getCart();
    }
    getCart() {
        var nun;
        // data.append('customerEmail',JSON.stringify(this.email));
        // console.log(data,"nun  data");
        this.cartService.getCart(JSON.parse(this.email)).subscribe((y) => {
            console.log(y);
            console.log("inside");
            this.carts = y;
            console.log(this.carts);
            console.log(this.carts.cartProducts);
        });
        // JSON.parse(this.email)
    }
    addMore(Id) {
        this.productId = Id;
        var image = new FormData();
        image.append('customerEmail', JSON.parse(this.email));
        console.log(image, "customer email coming");
        image.append('productId', this.productId);
        console.log(image, "both appended");
        this.cartService.addItemToCart(image).subscribe((data) => {
            console.log(data);
            this._document.defaultView.location.reload();
        }, (error) => {
            console.log(error);
        });
    }
    removeOne(Id) {
        this.productId = Id;
        // var image = new FormData();
        // image.append('productId',this.productId) ;
        // console.log(image,"productId coming");
        // image.append('customerEmail',"aooo@gmail.co") ;
        // console.log(image,"both appended");
        this.cartService.removeItemFromCart(this.productId, JSON.parse(this.email)).subscribe((data) => {
            console.log(data);
            this._document.defaultView.location.reload();
        }, (error) => {
            console.log(error);
        });
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Service_final_cart_service__WEBPACK_IMPORTED_MODULE_2__["FinalCartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 19, vars: 5, consts: [[1, "mat-elevation-z3", "mb-2"], [2, "width", "15%", "margin-bottom", "10px", "padding-left", "10px", "margin-left", "0.5px", "background-color", "rgb(228, 223, 223)"], [2, "color", "black", "font-size", "large", "font-weight", "bold", "padding-left", "60px"], [2, "display", "flex", "flex-direction", "column", "align-items", "flex-end", "justify-content", "center", "height", "20px", "width", "95%", "position", "absolute", "margin-top", "150px"], [2, "width", "20%"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "80px"], ["class", "inside-card-bg", "style", "margin-top: 20px;", 4, "ngFor", "ngForOf"], [1, "inside-card-bg", 2, "margin-top", "20px"], [1, "row"], [1, "col-2", "mt-2"], ["width", "100px;", "height", "100px;", 3, "image"], [1, "col-6", "mt-2", 2, "width", "400px"], [1, "col-2", "mt-2", 2, "width", "200px"], [4, "ngFor", "ngForOf"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Add More", 2, "justify-content", "right", 3, "click"], [1, "example-button-container"], ["mat-fab", "", "color", "warn", "aria-label", "Example icon button with a delete icon", 3, "click"], [1, "divider-1", "mt-2"], ["id", "selectNumber", 4, "ngIf"], ["id", "selectNumber"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-h-all");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "MY CART");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Pay Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CartComponent_mat_card_16_Template, 28, 7, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "app-f-all");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Total Amount (", ctx.carts.totalItems, " items): \u20B9", ctx.carts.totalCartValue, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 3, ctx.carts.cartProducts));
    } }, directives: [_Header_Footer_h_all_h_all_component__WEBPACK_IMPORTED_MODULE_4__["HAllComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_7__["FAllComponent"], _SellerUI_image_image_component__WEBPACK_IMPORTED_MODULE_8__["ImageComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["KeyValuePipe"]], styles: [".whole-card-bg[_ngcontent-%COMP%]{\n    background-color: rgb(228, 236, 241);\n    padding: 20px;\n}\n\n.example-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n\n.header-image[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/image/ApnaPharmacyLogo.jpeg\");\n    background-size: cover;\n  }\n\n.inside-card-bg[_ngcontent-%COMP%]{\n    background-color: rgb(230, 231, 231);\n    width: 70%;\n  }\n\n.mat-divider[_ngcontent-%COMP%]{\n    border-top-color: white;\n  }\n\n.col-2[_ngcontent-%COMP%]{\n    padding: 0px;\n  }\n\n.offers[_ngcontent-%COMP%] {\n    \n    \n    height: 100px;\n    background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpsyluJKA7Q557c4jRCyqxlTUbP3Km0R4IBhBF3plBQ&s\");\n    \n}\n\n.active[_ngcontent-%COMP%]{\n    color:orange;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0dBRUc7O0FBRUg7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0lBQ0ksNERBQTREO0lBQzVELHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLG9DQUFvQztJQUNwQyxVQUFVO0VBQ1o7O0FBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7OztJQUdFLGFBQWE7SUFDYiw2SEFBNkg7O0FBRWpJOztBQUdFO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xufSAqL1xuXG4ud2hvbGUtY2FyZC1iZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMzYsIDI0MSk7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTIwcHg7XG59XG5cbi5oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2UvQXBuYVBoYXJtYWN5TG9nby5qcGVnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAuaW5zaWRlLWNhcmQtYmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMxLCAyMzEpO1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cblxuICAubWF0LWRpdmlkZXJ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICAuY29sLTJ7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG5cbiAgLm9mZmVycyB7XG4gICAgXG4gICAgXG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSd3BzeWx1SktBN1E1NTdjNGpSQ3lxeGxUVWJQM0ttMFI0SUJoQkYzcGxCUSZzXCIpO1xuICAgIFxufVxuXG5cbiAgLmFjdGl2ZXtcbiAgICBjb2xvcjpvcmFuZ2U7XG4gIH1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return [{ type: src_app_Service_final_cart_service__WEBPACK_IMPORTED_MODULE_2__["FinalCartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "kKRD":
/*!***********************************************************!*\
  !*** ./src/app/Service/authentication-service.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationServiceService", function() { return AuthenticationServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthenticationServiceService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://apnapharmacy.stackroute.io";
    }
    login(data) {
        return this.http.post(this.baseUrl + "/authentication-service/authenticate", data);
    }
}
AuthenticationServiceService.ɵfac = function AuthenticationServiceService_Factory(t) { return new (t || AuthenticationServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthenticationServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationServiceService, factory: AuthenticationServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "kTK9":
/*!********************************************************!*\
  !*** ./src/app/Header&Footer/f-all/f-all.component.ts ***!
  \********************************************************/
/*! exports provided: FAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAllComponent", function() { return FAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FAllComponent {
    constructor() { }
    ngOnInit() {
    }
}
FAllComponent.ɵfac = function FAllComponent_Factory(t) { return new (t || FAllComponent)(); };
FAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FAllComponent, selectors: [["app-f-all"]], decls: 70, vars: 0, consts: [[1, "footer_area", "section_padding_130_0", 2, "background-color", "aliceblue"], [1, "container"], [1, "row"], [1, "col-12", "col-sm-6", "col-lg-4"], [1, "single-footer-widget", "section_padding_0_130"], [1, "footer-logo", "mb-3"], [1, "copywrite-text", "mb-5"], [1, "mb-0"], [1, "col-12", "col-sm-6", "col-lg"], [1, "widget-title"], [1, "footer_menu"], ["href", "#"]], template: function FAllComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Apna Pharmacy is your single go to place to find all type of medicines in a convenient manner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A9 2022-2023 ApnaPharmacy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Corporate Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Terms & Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Term & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Help & Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Call Centre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Email Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Term & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Help Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{margin-top:30px;}\n.footer_area[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n    overflow: hidden;\nwebkit-box-shadow: 0 8px 48px 8px rgba(47, 91, 234, 0.175);\n    box-shadow: 0 8px 48px 8px rgba(47, 91, 234, 0.175);\n    padding:60px;\n}\n.footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin-left: -25px;\n    margin-right: -25px;\n}\n.footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-10[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-11[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-8[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-9[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-auto[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-1[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-10[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-11[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-2[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-5[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-7[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-9[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-auto[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-1[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-10[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-11[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-8[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-9[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-auto[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-1[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-10[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-11[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-12[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-2[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-3[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-5[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-7[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-8[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-9[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-auto[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-1[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-10[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-11[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-12[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-2[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-3[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-4[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-5[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-6[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-7[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-8[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-9[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-auto[_ngcontent-%COMP%] {\n    padding-right: 25px;\n    padding-left: 25px;\n}\n.single-footer-widget[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .copywrite-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #747794;\n    font-size: 1rem;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .copywrite-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .single-footer-widget[_ngcontent-%COMP%]   .copywrite-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #3f43fd;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .widget-title[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .footer_menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #747794;\n    margin-bottom: 1rem;\n    display: block;\n    font-size: 1rem;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .footer_menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .single-footer-widget[_ngcontent-%COMP%]   .footer_menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #3f43fd;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .footer_menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n}\n.footer_social_area[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n}\n.footer_social_area[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    height: 40px;\n    text-align: center;\n    width: 40px;\n    display: inline-block;\n    background-color: #f5f5ff;\n    line-height: 40px;\n    box-shadow: none;\n    margin-right: 10px;\n}\n.footer_social_area[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    line-height: 36px;\n}\n.footer_social_area[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .footer_social_area[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #ffffff;\n}\n@keyframes bi-cycle {\n    0% {\n        left: 0;\n    }\n    100% {\n        left: 100%;\n    }\n}\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImYtYWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyxlQUFlLENBQUM7QUFDckI7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQiwwREFBMEQ7SUFDdEQsbURBQW1EO0lBQ25ELFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNFSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBOztJQUVJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBOztJQUVJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBRWpCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLGNBQWM7QUFDbEI7QUFXQTtJQUNJO1FBQ0ksT0FBTztJQUNYO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkIiwiZmlsZSI6ImYtYWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e21hcmdpbi10b3A6MzBweDt9XG4uZm9vdGVyX2FyZWEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG53ZWJraXQtYm94LXNoYWRvdzogMCA4cHggNDhweCA4cHggcmdiYSg0NywgOTEsIDIzNCwgMC4xNzUpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDQ4cHggOHB4IHJnYmEoNDcsIDkxLCAyMzQsIDAuMTc1KTtcbiAgICBwYWRkaW5nOjYwcHg7XG59XG4uZm9vdGVyX2FyZWEgLnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTI1cHg7XG59XG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC0xLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC0xMCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtMTEsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTEyLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC0yLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC0zLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC00LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC01LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC02LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC03LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC04LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC05LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1hdXRvLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZyxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbGctMSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbGctMTAsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLWxnLTExLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy0xMixcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbGctMixcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbGctMyxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbGctNCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbGctNSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbGctNixcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbGctNyxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbGctOCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbGctOSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbGctYXV0byxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLW1kLTEsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLW1kLTEwLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1tZC0xMSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtMTIsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLW1kLTIsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLW1kLTMsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLW1kLTQsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLW1kLTUsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLW1kLTYsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLW1kLTcsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLW1kLTgsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLW1kLTksXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLW1kLWF1dG8sXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1zbS0xLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1zbS0xMCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtc20tMTEsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTEyLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1zbS0yLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1zbS0zLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1zbS00LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1zbS01LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1zbS02LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1zbS03LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1zbS04LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1zbS05LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1zbS1hdXRvLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wteGwtMSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wteGwtMTAsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXhsLTExLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC0xMixcbi5mb290ZXJfYXJlYSAucm93IC5jb2wteGwtMixcbi5mb290ZXJfYXJlYSAucm93IC5jb2wteGwtMyxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wteGwtNCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wteGwtNSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wteGwtNixcbi5mb290ZXJfYXJlYSAucm93IC5jb2wteGwtNyxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wteGwtOCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wteGwtOSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wteGwtYXV0byB7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG59XG4uc2luZ2xlLWZvb3Rlci13aWRnZXQgLmNvcHl3cml0ZS10ZXh0IGEge1xuICAgIGNvbG9yOiAjNzQ3Nzk0O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCAuY29weXdyaXRlLXRleHQgYTpob3Zlcixcbi5zaW5nbGUtZm9vdGVyLXdpZGdldCAuY29weXdyaXRlLXRleHQgYTpmb2N1cyB7XG4gICAgY29sb3I6ICMzZjQzZmQ7XG59XG4uc2luZ2xlLWZvb3Rlci13aWRnZXQgLndpZGdldC10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLnNpbmdsZS1mb290ZXItd2lkZ2V0IC5mb290ZXJfbWVudSBsaSBhIHtcbiAgICBjb2xvcjogIzc0Nzc5NDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCAuZm9vdGVyX21lbnUgbGkgYTpob3Zlcixcbi5zaW5nbGUtZm9vdGVyLXdpZGdldCAuZm9vdGVyX21lbnUgbGkgYTpmb2N1cyB7XG4gICAgY29sb3I6ICMzZjQzZmQ7XG59XG4uc2luZ2xlLWZvb3Rlci13aWRnZXQgLmZvb3Rlcl9tZW51IGxpOmxhc3QtY2hpbGQgYSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmZvb3Rlcl9zb2NpYWxfYXJlYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG59XG4uZm9vdGVyX3NvY2lhbF9hcmVhIGEge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWZmO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5mb290ZXJfc29jaWFsX2FyZWEgYSBpIHtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbn1cbi5mb290ZXJfc29jaWFsX2FyZWEgYTpob3Zlcixcbi5mb290ZXJfc29jaWFsX2FyZWEgYTpmb2N1cyB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBiaS1jeWNsZSB7XG4gICAgMCUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgYmktY3ljbGUge1xuICAgIDAlIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgfVxufVxub2wgbGksIHVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5vbCwgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FAllComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-f-all',
                templateUrl: './f-all.component.html',
                styleUrls: ['./f-all.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ma8H":
/*!******************************************************************************************************!*\
  !*** ./src/app/Home-Landing-After-Loggedin/home-section-loggedin/home-section-loggedin.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: HomeSectionLoggedinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSectionLoggedinComponent", function() { return HomeSectionLoggedinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Service_buyer_product_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/buyer-product-service.service */ "5hKM");
/* harmony import */ var src_app_Service_final_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/final-cart.service */ "KYHu");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _SellerUI_image_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../SellerUI/image/image.component */ "YNNg");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");












class HomeSectionLoggedinComponent {
    constructor(route, router, service, Cartservice) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.Cartservice = Cartservice;
        this.customerEmail = localStorage.getItem("email");
        this.Productsmodel = [];
    }
    ngOnInit() {
        this.service.getAllProduct().subscribe((x) => {
            console.log(x);
            this.Productsmodel = x;
        });
    }
    getProductById(productId) {
        this.service.getProductById(productId).subscribe((data) => {
            console.log(data);
            localStorage.setItem("productId", data.productId);
            this.router.navigate(["/product-description"]);
        }, (error) => {
            console.log(error);
        });
    }
    Addtocart(productId) {
        var image = new FormData();
        image.append('customerEmail', JSON.parse(this.customerEmail));
        console.log(image, "customer email coming");
        image.append('productId', productId);
        console.log(image, "both appended");
        this.Cartservice.addItemToCart(image).subscribe((data) => {
            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Item is added to the cart!!");
        }, (error) => {
            console.log(error);
        });
    }
}
HomeSectionLoggedinComponent.ɵfac = function HomeSectionLoggedinComponent_Factory(t) { return new (t || HomeSectionLoggedinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_buyer_product_service_service__WEBPACK_IMPORTED_MODULE_3__["BuyerProductServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_final_cart_service__WEBPACK_IMPORTED_MODULE_4__["FinalCartService"])); };
HomeSectionLoggedinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeSectionLoggedinComponent, selectors: [["app-home-section-loggedin"]], decls: 206, vars: 18, consts: [["color", "white"], [1, "example-spacer"], [1, "container-fluid", 2, "display", "flex"], ["matRipple", "", 1, "mat-elevation-z2"], [1, "row"], [1, "col-md-auto", 2, "position", "fixed", "left", "10px"], ["src", "https://newassets.apollo247.com/pub/media/catalog/category/home_essentials_22oct.png", "width", "40px", "height", "40px;", "padding", "20px;"], [1, "col-md-auto"], ["src", "https://newassets.apollo247.com/pub/media/catalog/category/h_and_n.png", "width", "40px", "height", "40px;", "padding", "20px;"], ["src", "https://newassets.apollo247.com/pub/media/catalog/category/baby_care_22oct.png", "width", "40px", "height", "40px;", "padding", "20px;"], [1, "col-md-auto", 2, "margin-top", "10px"], ["src", "https://newassets.apollo247.com/pub/media/catalog/category/women_care_22oct.png", "width", "40px", "height", "40px;", "padding", "20px;"], ["src", "https://newassets.apollo247.com/pub/media/catalog/category/logo.jpg", "width", "40px", "height", "40px;", "padding", "20px;"], ["src", "https://newassets.apollo247.com/pub/media/catalog/category/ayurveda.jpg", "width", "40px", "height", "40px;", "padding", "20px;"], ["color", "white", 2, "margin-top", "10px"], ["routerLink", "/buyerproduct", "routerActiveLink", "active", "mat-raised-button", "", "color", "primary", 2, "text-decoration", "none", "color", "white"], [1, "mat-elevation-z3"], [3, "click"], [3, "image"], ["id", "p-name"], ["id", "p-price", 1, "mt-2"], [2, "margin-top", "0.5px"], ["mat-stroked-button", "", "color", "warn", 2, "margin-left", "35px", 3, "click"], ["mat-stroked-button", "", "color", "warn", 2, "margin-left", "35px", "margin-bottom", "10px", 3, "click"], ["mat-card-image", "", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCv91DQhZ9Mguj5oEFBP8bqn6Dpw057ZMag&usqp=CAU", "height", "100px", 1, "shopImages"], ["mat-stroked-button", "", "color", "warn", 2, "margin-left", "35px"], ["mat-card-image", "", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwfgp96Qr1HCQNoDuaE76-BorQzH9UPASrpA&usqp=CAU", "height", "100px", 1, "shopImages"], ["mat-card-image", "", "src", "https://images.unsplash.com/photo-1642055514517-7b52288890ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBoYXJtYWN5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "height", "100px", 1, "shopImages"], ["mat-card-image", "", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpu8uhLohPc654dRyN4i7lBHPcHiY4Y4vWFU7by7N&s", "height", "100px", 1, "shopImages"], ["mat-card-image", "", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1t2E8rodMFVfPgVXnSu1VENqixc-7Ez7EQ&usqp=CAU", "height", "100px", 1, "shopImages"], ["mat-card-image", "", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqucYpn1bHG3bCvC3yPtVOhP37LwvTbET0Nw&usqp=CAU", "height", "100px", 1, "shopImages"], ["matRipple", "", 1, "mat-elevation-z1"], ["src", "https://newassets.apollo247.com/pub/media/ves/brand/GNCn.jpg", "width", "100%", "height", "100%;", "padding", "30px;"], ["src", "https://walnutfolks.com/wp-content/uploads/2020/10/pasted-image-0-7-2.png", "width", "100%", "height", "100%", "justify-content", "center", "padding", "30px;"], ["src", "https://newassets.apollo247.com/pub/media/ves/brand/onetouch_21oct.png", "width", "100%", "height", "100%;", "padding", "30px;"], ["src", "https://newassets.apollo247.com/pub/media/ves/brand/friends.jpg", "width", "100%", "height", "100%;", "padding", "30px;"], ["src", "https://newassets.apollo247.com/pub/media/ves/brand/nivea_21oct.png", "width", "100%", "height", "100%;", "padding", "30px;"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUsAAACYCAMAAABatDuZAAAA51BMVEX////m5ubl5eUBZGvk5OT8/Pz39/fq6urv7+/09PTs7Oz29vbufg4AX2b1+Prw8/UAWmLucQDuxaj30LPqz8D74dMAV1/uewCTsLLudwB4naAZanDugxyvw8U/en+jubu7zM3S2Nl8n6M6eH1aiY4AUFiJpKVzlpues7SovsC5xshmjpLz2crI1NXm6+69yssASVLojkEqcHXn4t1OgIXZ4+TvoWbujDcAP0ntmlrpvZ3rkkjqpG9eiY7q3dPqqHnosIP1wpvry7TksZDpgiXm29Tgx7X67ubjq4TxpGrxsoT21sH86+CHtmsLAAAbmklEQVR4nO1diWLbNhIlKB4gGVp0DkqyLOuwJdlWRCeKma5zNmmy6bb9/+9ZDEACIAgeOpykrdHuFqbwCPJpAMwMBiPDgIJNhJBLqy6pmZhWLagGULOhatlQDaCpKVC+FuVQlMlRHlQRR5kSylNQDkUZCsoXKNQG5QoUVlD0ZUxbQUkU+OJlzEoKSiiXPegDlw9cPnD5T+fSMk0ruwTVjBWTVLMbQZXdiFabUI5AsfeDKvsGfGiasQKfewrKUVBoX1TGioKyFdQBKDAwFM8hJaDVAKoerTpKVTR1mlBYhwr2RXnboppeZjdUFQXs+6pjHhpkzJuVwmcrwkdRvkCpYqSKbD6QOWob4atG6YTPdAVKFVm7CeUKlEZk0Q+cFFXUtpNiDcrWomomRXUqrZoU61aTBy4Px+WWY9zcaYybO43WWpS50xgXL7PNGK+moEicD8WzYQ6lVajYHq3CRRtDDYsqbWrTz4NWKLUDigq2Rjm7ouytUY5A2RyFm1EGY/576ERWWSeymhcYq6wTbYnKhM9qENkD6ESZFD/o6g92zz+JS/OBy5INSUo+7EnJWIGSzXxQsskCyhYo9n6i6kMtn/lI8RSUo6CQijIVlN0KZTWgal4maEkB/b4Qa02rrDUSYoQKAxmJ76uE8qpRnkAxwhCXDYpyq1F2E8oXj4WqUUYrlEKBKR5LjypSgFpIMdcUdQNZoLzq4V8akgqqaSBbEspog7IllH4gm6hCV9dTkOuXD3bPgw15r1xWyuU92pBFJ0lbP1GDu7HCT7Sva7ONkzK3IRsU8mo/UTXKowXTf1kV51XseaKqv9qEguv553nRo3B7VPFz7cPiA6FaUCBQxnbMl0XW16IaRPagTsoGVMmvvqfwVY/ajMsHu+fB7vlJudRrUFZLLhWUVvUsc2k2K5Fmmcs2qCYu8zFeYKWM0nOpRZExbkPBLik+rfpQxbQKNTeAmkOrDlQ9WtWiPC3K1qGwFuW0Qrk6VKCg/G1RNRR4CgVVqO0sznpT3VNQktHdZKrnrs17NtWxgqoxuncx1f+1uroyKX5nu4cNSQ2X2bTLhsHfhcv2do/nIv5e+3OJJ1djXkajpOjbmI7lMvmbcNlGLlE6Go2uRmN/fAUo+2pk1XHZar70zuNIlPm0MPO5o7n0YbziqL//fImuNptouNngeH5Frq3n89SsQbVax42zsCNKtPZllLGOpA/DlbfzOt4O9T3XcT+wwzWhK9qcYTdYnUdp3TrOZb9Ov1S4vCkuMAqX5LJWvzRLy1IrTfHH6pcmDq9JB/NRPEV+PI4To0a/5JfqVipVLuu5/EfZPRmX6dnMG3fQnHK5lw1ZLZfo38LlKHTOFm4bLhucJBVymXl8SmMcfDfO39dP5MsU5Fw60dWLqcW4rPIT5S494YbDws+XV22Fy0JT56bA5XubXDx6/SGQb6BWtRcbq/eO0lDghesgcIjqsoxubTRPg2pUK7+65d3KXMbTgpPSHUlcRp0JiMbpL/4/xa8+X3uW++LGT/8zMbr/maIaVCtd3TtTuZR0dfc65zKMhmPSkf3m+Pi/7s+uq7e3ewgK53aPu7fdU88lk8swis+usY+M548GvZfJP8LuqfsGtuJS0qAa5TKMOmfj1HeT5Ond4NGj46eogct/7P54Fn5gii8FCblEOrk0xY1MdxSf99fksZ0kefN20Hv0qPfuCLkVcRuSrEgRGDXRHraKMjiKvRSE3rvauA09qinawywNTS3K1BFnNDspVf3SLKC6DswjSfL8zSkw+aj30nfsZ98hnmjxHspquVyN1L5+SDwRu7SX3UNK8uHpx0cDMrqByt4HZPz67Tvo6mdhVuKxfV+6evMMeDi7p2sc/fXpY69HJTKjMkkeP7K/C5f5E/1tuYwzLrtJYn7+7e2XAecxp/LD4LXxr+WyIVhb4pLokKspu9HTj3dEHAWPp0DlW4SSD73BY6OkkB8+Xl3m8meIV2fHAZzCIQJHnDdw6MkBJ3/qML5dg8/zyH38+pHMIyXytHf8EdvG50Hv+JVy+sIpnG2QTkSU+qKH5Wz1sXSogHMZ9r3WqMKJiAOinJZn+DIbMhouUvg8+PTLsTyuMyofDV4+T5DxpkekMzH3P9/TJLL4jA+WPtaiSsJnmvd5vgdVzgiq3RMNL32Mjuwnd4UJ8pT+A0ye/pag5NVbspoPGnX1Q9g9XplLZVL8GfchPdA+LomBmHz9+KUgkaf5kjP45YlHqPwvjPvey26rBWZPLjVy+WO5bDfGz+ILbLjJ87eDXkEgcyJ7H4luHsDnVEKfdcVovb9zuhq53MJPtMUYt1qO8VaHp53NwnDsV3fKJEnFsjcY3D3uHh0dGTj//M7Qns7e7dS5VFUfa8g13sugVQf3fH6cM1+rE914yP14XFR/mEQev34SgOx3n77LP+9ZWuEr60RuQU+xSgIhaTfUsxwUhc8RXBZ0IuSTl+SDypKGf6CKbGEguz5r6vl1Tsq9z/CRNeXlIGcxJ3IwOL37zFDovy+5zA6eJmyiMsg7YcYaURtInffle0TPT5KUzMB8UvSxSy4RlcqVJ0WXXJ30lycXneFmuRwlhjQpHklyKXR1ZzqeLU9uh53zk9loSnog3fpJMoWSkh7ySdGDB6BXk4R+hdPxYrXcdDYXy9mNhSVvzIHjL5OnveLwJiP7l9++krcnXP31+O0pZ/J08HtCXvWSlP4CypTKNa3DRRubvtXfhDEp4WZm+V4mrZe3w4hcGl6MkM+DT/zR+2EcgckNs2IYxZtFF9dwmYzPOnl78n9RdDaGqJ3JCxYrAZ1m72VczMkf9OqLsZH2z0jjvJswCm+v7otLon7LY5sQ9+vnb0YXJQl6/sdbriLBagRUkiWWPhh1O9CHWsTsryi0sdcP+aZGGC2Yr2pBPuKG1Y2fcbnuRLLxmiFwmUtmQ+JFpLYnd4NYgQt+ORrR90J+zNtsjGUclnDnyY5cNvjcng9kgXz55in9vPv1j9c9SdcEKo8/JfQG8rOT0ud/286ZvNXWiS7Ix2mncC2+ZDNDMClczhG3FrIULvv0YfGFyjy9W5+8IGcuPGNNF7xpvDZuNTgqBdv53Fq0Nr9yqRwMXv8Jr2Emr55+HKhG5Glv8DlhKMHlmHw7eMb/TtTnjlbOKC5e6sxT+pXquQQ6wElpupzLXCfScULImmHpAeI1fVlxt1uM9bj5ldskaVvHXyYvM8oGp7++OoKL3x5/6Q3Kq/rgy4eE9ZnIXJLBx19leFKiJ5qV32RDVekKLjvRkurqbbnsRGvXFdy9h5Zi7zROUAWXnShtNQNuYfckvxGxPCUy+eUzSlDXcJ7c9VRF85TOon+Qx1ova7ns6EZT+VJ87eZcwgoCq0Yk8Rr71VyGbIkpzJxD7F9xeARD55y7RZaGiTMcKwIXXhyYS/RhwObJ38lKkyRP3w10bg3C7js/cb1xvCyN8QKX7Up4ghmXUXS+GFNtJh0PxRcyc7RcLgkTF+NJkqbp9GYhvqToGgn2yOQqhZqEHuUy6sxGa6o5Xa/Elxb7W3HZaEMmr4G6wd03YkNav/eKS81pzuSXT44R4OltFJblktiFRS7Jml3iNiyuwOcQSRNM5iNiurq5jSzmhyFo4WUu+5trjO3sVTESPrmlL9NnGytO7CVp6m/O6CTK1m0vlR6ezZctXZsBlMxKIrXMNAp4NaBiOfh81O26vw/Een56yiklts/nbtdz8EkcksemOPE4V3YQ2AuZqGg1vrwtLjdhOLvun0ujeOiRp/GmPlg7/Flsvk7HlhM4nqQTsQap7Ugv44hvdGhgh4OjUSq+FOjASQ1HUBAEnPZwFeRsZIZika0icYaRM18Rm3X0v96jwctXZHh/6g2K4zob23ePbcN38fqEaboQm2VW60Tk8W88Fxs3BXYXxL7x5ZlgCLqYRwTSlLZ7Pb4WRROjYENeFmxIPiS5+MVkLrM4gWf8ceKRy61BxOPyPf4YG/+AZ/gQJkL5B7Ehv34R6rrkH/ry2zeKGt1mY5TGDKIaLqMbnzrWJFENZ0wpNiTCKZcwKWI7Wa8ntKz5AkLvqrchDTydZCW9lbnUTNrhmZejAmyuOY7fuIMPaPe4jweD34gN+eZYWbmJkv7o4+dXSZc0nM7EbNfEZXjiMSelI43yo8yuE/xmXLr4etmJRbB84a4lu4e8nzN6L8XOC6US1li/xGU8dTNWuuNbKehefKW7cFnloeveHX8iN/ofd2zA/wa949N3n//qZkFDk7n0kE1jPJqizEl5ziHL3HfTV7j0boYlI1LcVRrjfZt5QcclI5JzSV5wpKir4QXORusi1uOGuIV3VznDx3aHlCrUkuM3pAlz8TLL5rh39/ufPmyg5U2VWFbYdZLXHsN25AFtZyjBJSGGbT/JXMI5AGepGkQSxLY9mUu4qbnR6/akAe01OC8SFrq0W2PaqcJ1PJpoDJ6FbZDRwwXsYUvENelE314mppvZPWQR+nL3+ANflkoxg/T5NDqRJetEBkNZ0g7DZTZvY4lLn6ghF5WvSDUtVSdK9LJF2zPZmRZuSLRUevW6shvyzRtb6EQNuvqfH1Dy+wD0SKJD/vrVpfOjUYpzq+WyOO1TPFG1ZS59VOYSeTPJnUSmPnDSFe6qcGlvxMdRTO0YwWXmRl3JbA9ZlJXwewBmCGaTwuWB7B4bUxOSLDUfnyWJ62InHa1GuvjLApc1dk/OpVfPJXbXwrezukq7ATFm+Oc6LvuC+vE6NcHLy7uIMo+5JdEUjZkfnfMbDi/Xa3+6TpP74dLoUl39+J0Hete0fxHGUXx5CLls4NLHJ5y4hYdyL6d8V7/ApfD8RLnnUdoQYnKJfUF4Z4MpK4mg1zMg1BEZtmi0FZdNPjfvba83eAdKpDPeMNuPWFbCtdlCLq2d5suA3/Uc56GLt4JLZFlFueRzYbigr2pZptDOcy4td8Mv3SA6840k/T+LPEwVLtuHExqFIFIlxtN9Ohj88s1A2Fpwb3jY9wso9Qxfva7u5H2dS02yNF4Sl7aXywvR5FlfrlW8a0G/dIVNdONmYjQWXPLg2CVX3wMas4uFaT7NgtKdpXha6Lddhja/MUdE8hbCrGxrJnkjOJdZaED5DF8tl3lAgcwlC6Su4BI8XxCG4K0quby0ET8ZE135jEthCjJdne5sCC49tgSKqeQm4zLdTldvbUO+6lEdqKC4hX1xSFx/7mw3Ls2irs7nsXgCAuB6C2ldLsklkvzGvg+sBFKgYzWX/iVfes6Ye0JaeXaze6q4/Mq2CQvxl01yeSAuRZ/RyXq9Hsv7RCqXfRtNJdWmv15P+7JfT8clply64qRX2LlM0/VCtg924bLST2Rq4tW5XFpmxRm+Oj+Rk8caFLmkxkGBSwkTFv3dZRtybFv+eafQvqC3xzzQpSiXpFskf0UqrtGG1JzhayjFM3zhpSN/GBTP8K1sOM8m2ZCB5zmyDZnfU3A5zu7nSFx6XqoxR/jcBnfF0jruePa43F48RZD3Krh0sysnYTWuE3jtS7vceMUzfKATbWVDmiX9kvRV0Ik0+qWJFyo54SZvoLUhz1VSopPzvJaPJF9waTGdyPDK7qMx15xsVfj2sCF1586AywZdvYXd02BDkonKV+zxcDgd51xele0eonUXWYlujbxFrl+aBS6zdeFG+c7iJccd1u7ZjUu/mcsmG5L04JxI3rwwPgv8yyjvBat2DynpUHqSkJhLRr7dFl1nL4M1XPo38lZoCHNxjou7h+GycIYvD2mhYS2XhURj7nUsfRixMc7dt3PCpQk7QXlhXFqmd87DZASXvFmHBbpMb1l0UBjF52vDdsf8lVPyenwbdp7tneHxJm8fvZ/6lsHH6iqXyxWEEUF5wbk0XX/WyXHhDGQo/5bCvlGnfSvEqUlDtDk9vP5itpidQJmRyqSA8tdLejVrMAaXqDeajFi5mkIikCvSIPvcyPrCixy1vPGzvkZL0mBBL7JUI+RFRhQ2Ju8CfXl5TCR8PuJlnSUowd4Uupr1RwgTJdPh4ZF+ntYEbEAoZiqnNfHc6Ri6na2xBxTkQZVOm8wuOXFGNic3WJwi+s+GWimYhnUsbsCqkCKJSRy9QTaixLk6trko+hKRhrlbxzKzweUh0yofLacdqKfxYEvSz+w6aZNAOsPHx598XtDl3ZI3EFsLBz/D15yeTJH9dvk2lIwu8hFeQ0F9l3wbefi1oOA+4i8ruXzIf/nwexQ/5DcU9k7nyN4PagdKNKaiSjOfFmU1oA5x5lm7jtckDN0izeg+ica0aUb3TjTWhGqRMLQGRWW/nMjWQpo5mbpTu1z2EQ3FZD5SevFIVNUMBQyF2qCwQHkCZSuoLuKDS0LRzwMFdaRF+brHUlHSuqDVL60d7B7/r2ekPIXy/Fmx+pxWn1VXt0WpTe8JpW36TG36F6fgYDZk95fjf2d5uxWXrfxE/hMoj2kR1SfVVbXpbqiapruhtn2sN39yCtr4iUS8padWRbChdwSlS4uoHlVX1aa7oWqa7oba/rG0bIh4zAJxBhc+qw3z5QNsjb+hQC/+TL9N3HyAdLu8Bgf7DYUHu+fB7vkRv6Gwl1xaO3G5pW+jlGisFZe6c7pV6ckOtT+en9P1fd9lN4KYRa1CnnupaXCieJISlwSTHSjF5KZmXXoy6AurfUmsyCgaSalyCW0lNd4WKMGlNMgyFA2eV7kUqEq5bGVx+vbJyWxMrVvv6mQxqzS63esTUVb0Xpqc4GPeZNatM9WdPm93Q1+9zuiGtjeo1ugmb3GS79PV5AQ3JhcQn31xXfbTHuI3FIJ5GC3pYePgfRR1JDEqTor+pbRfEdvs+yoN5KXY8Zj3neqBbF/whnEnrZ1KsQMbDCcY1eXbIG2iFW7Kt+Gv2B5cGJ+IE+8H/A2FIGJHwYDLsDOs4VLahYoquQzpKW0aWBFf+TVcZg3hzTb1XNKAh6Fby2VAQyEauMRLODhI49fjxQ/nMt/Smtdxubq4uKC77htcz+WSNISI3zit4zKgcVsQ4rYvlxBLE/bRNfQdbcdlGxvS8o8ol1CFhx5W/qiZS7iM1gkcSCSFsWKVVOuTsBO6xFow0g47WFGRngy4HFLLjFTghIA2FQegTBxlW71WTR4Yh4U7ib40Crk7juhJLBviK9j56Nbx6k4x+ZejpgxjVQSH82hbm3QxxFUoCHmMpsTgsknLUlKzrKlH5DKCP3AwI8+b2lXJv6CvDXQARzWiUbYFqUsZRs9yDCEMKU8Zpj4hVBDdvq9LNEbudBl1Yox9bE9fxPO+p0lPVngZqS8jk+KmDDyES7bFDLG5Q1eg/CLqKoL0mKZGZHMbEpsQ8hiB6xC5feBSFtmCXUe/N9rBhN62xoYktxxeR1SQPPEyxSREKKFcNiQa60dwFBV0Is8juu4253uyS00zAuHywoRxa551BJdl/RK4nLgIg19AnxyLxU5QLl2PjN2wy/tStW7KZUpuhW/DcIPr7B4YNzimMcTVujrKuCzql4qmCEcOws5sTRvciw0JSwqLd+g0cUknLrL2AqfVXCZONzDHXNwruczysnQ2aZ0NSRaM6IZmQ9ybSxYUH8bD1WRHLpvHuFT0Y9ySuKQq0cTVjnGLhjXT7yWCZVz0pRvjedms/Zr0ZGTeDS2fzBhRWkpqJsY4cHnS6CdysiDoMN44qGllLozxmixbvsiy5UZc1Qnp4e6KNF40CDJih0HnE21GL3JFiniMpo64QSAyevG1h5FO/jtfV+QBA9SQTEEOTiM4RFGdaIzNl42JxoL+kOXYCYeuoEBB+WXittCJVvRM8PS2UScapeyQMruBXifqRBlFYWpWujZBJ9qATmTBgnBeqRNB3H84NmwaiuXtpxMxVLqgZ7ijBafgAGf4ZF0ddkSRs2rS1WFhxog0rXQGkfkynFrWNCH3YiZAta6+oR1AgGGI1aTAOQpLh0jitXiZXXR1N3fMTEFZH3IKfozdE0+bHGvApeVCB8NGu4dx6YMalVZwKQViwkkpey8u0+FmA9IYIAxSfvhY1u24zOVS7HTruKQoEPJ6e3xok0XDBOWpkkt6FIIl0iGitKnmko5xT++kzLn0Q5pLikxz0Odhz/Axn1tmQ0JTZkNW+dxgvpyk0zUttIHG5wY2JPygnWFcguJf6XNj8yWE1UPocehUJPeHIR6vp0T5Xa9y3V/rcwO5vJiuaXLBKdJ7zzBRrOIRxEZCpohzTkH7M3yNs6vW7pH2znIU6EQ8WneNtHtnwu7xm+2ezi0pcHyQjE69TmQbMFvSyRzso7DvV+6ddbg2Ep8rfXEKJjFEuvevZqBlXLotVuZt4y/1NiQq7VFcyadl1m6D3eOS5hmXlbp67nMbTkt+9eyE1RpUIZ+inAiOotbo6nxavVX6EhRcsGRd0PUG34fdE4dxxuVZFHWq7Z4x9wVH4byKy1UczhmX1/OQ/oplBZc8TD6KzlK3wu4xTsjtplkGUqLKzKdVXJo8k2QYbSq5tC9yX/D5UfVqsgeX/X5/xN7vilSruUz7/cs+LeQ/U6Tl0ie3GDsMRRpOKrkMRv2sXE09VGVD2mNyOy9DTUm3/JxuSS77oowquTS869WQ2P+r9b38hoJt8cDwAGLEy7EGAiViyI2qWAOU/9wOsb9cKYdvKWoA7lWam5tiDQJUOV+qYfQVv6GAePB9q3ALPl+KUI5Sli21qjbdA1XT9HuiDvMyOapdbJY+PKbWSWnef371ZlRNoMvu+dX3tSEz2S9OpXsHZ6ion/+34w72W+4PXLbgkocKm1KMtSluJAS8EGDMA13EGEdmOTyG2oAKyhEdUFSZFbhVPlp1KLMKZUkoO0cJVsQYF1xylESBHiVHCJkl4thOVKssW6KpTZN3BbujgvaobNOKo9wtUI5A2bujcEuUwZhv9tBZ0rJkaRQCqzH+cpfflbJqf1fKgMN2jb9GlQmf1bwsaSiw7sGG/N5TqaGg/l4xgw9c/mguH+KCt/0NhZ/qDJ+poOxWKKsBdagzfHmWraLRnYee8p0bXzjLEUc5AgXmMyqhXKh6ogNHh3L3QPmyD38XFNKhtqCAE4daSDHXFJFev5QHska/RHr98rv9zrNVfJn6PYqmQOoHu+fBhrxXLivl8h5/h283P5Hk2tzCT9TeSalHmWazQi75ieoORO3iJ9oix9ZDqS/Gdsxrjp02iawQI2FD7uCk3E1kxWMdzEl5f2f4HuyeB7vnR5zhK6ePqFYim1TPMpfVqmd7LrWoshKpcKlzUlapnq3P8EnZOaBuSNk5UDHVCBLpP1xjTxRtakipRhBPGnJIlN+ACgRK+zJ1qDIFB0qck+lERZRkdP8kpjpWUDVG9y6m+r9WV1cmxQe7Zw8u78Hu+ddyeQ9y+TBfHm6+lBYxu7j0HSjR2L7pyUopw/ZNT6ZPNHaA9GQGl+K2+qW1q35ploa/kv9SrynqNsF30C9NE+2gX1ZToNEv/w+5jeT8x8DRxwAAAABJRU5ErkJggg==", "width", "100%", "height", "100%;", "padding", "30px;"]], template: function HomeSectionLoggedinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Shop By Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home Essentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Health & Nutrition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Baby Care");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Women ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Care");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Covid Essentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Ayurveda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-toolbar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Half Price Store ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionLoggedinComponent_Template_a_click_55_listener() { return ctx.getProductById(ctx.Productsmodel[0].productId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-image", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card-content", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card-content", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionLoggedinComponent_Template_button_click_66_listener() { return ctx.Addtocart(ctx.Productsmodel[0].productId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionLoggedinComponent_Template_a_click_69_listener() { return ctx.getProductById(ctx.Productsmodel[1].productId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "app-image", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-card-content", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-card-content", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionLoggedinComponent_Template_button_click_80_listener() { return ctx.Addtocart(ctx.Productsmodel[1].productId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionLoggedinComponent_Template_a_click_83_listener() { return ctx.getProductById(ctx.Productsmodel[2].productId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "app-image", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-card-content", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-card-content", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionLoggedinComponent_Template_button_click_94_listener() { return ctx.Addtocart(ctx.Productsmodel[2].productId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionLoggedinComponent_Template_a_click_97_listener() { return ctx.getProductById(ctx.Productsmodel[5].productId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "app-image", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-card-content", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-card-content", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionLoggedinComponent_Template_button_click_108_listener() { return ctx.Addtocart(ctx.Productsmodel[5].productId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionLoggedinComponent_Template_a_click_111_listener() { return ctx.getProductById(ctx.Productsmodel[6].productId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "app-image", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-card-content", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-card-content", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionLoggedinComponent_Template_button_click_122_listener() { return ctx.Addtocart(ctx.Productsmodel[6].productId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionLoggedinComponent_Template_a_click_125_listener() { return ctx.getProductById(ctx.Productsmodel[10].productId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "app-image", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-card-content", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-card-content", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSectionLoggedinComponent_Template_button_click_136_listener() { return ctx.Addtocart(ctx.Productsmodel[10].productId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-toolbar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Nearby Shops ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mat-card-content", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "MedPlus Pharmacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Locate US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-card-content", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "MediPrix pharmacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Locate Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "mat-card-content", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "MedPlus Pharmacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Locate Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "mat-card-content", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Medwise Pharmacy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Locate Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-card-content", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Denchmed Pharmacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Locate Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "mat-card-content", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Apollo Pharmacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Locate Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "mat-toolbar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " Our Partnered Brands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "mat-card", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "mat-card", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "mat-card", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "mat-card", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "mat-card", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "mat-card", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.Productsmodel[0].productImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Productsmodel[0].productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs", ctx.Productsmodel[0].productPrice, "/-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.Productsmodel[1].productImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Productsmodel[1].productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs", ctx.Productsmodel[1].productPrice, "/-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.Productsmodel[2].productImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Productsmodel[2].productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs", ctx.Productsmodel[2].productPrice, "/-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.Productsmodel[5].productImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.Productsmodel[5].productName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs", ctx.Productsmodel[5].productPrice, "/-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.Productsmodel[6].productImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Productsmodel[6].productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs", ctx.Productsmodel[6].productPrice, "/-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.Productsmodel[10].productImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Productsmodel[10].productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs", ctx.Productsmodel[10].productPrice, "/-");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _SellerUI_image_image_component__WEBPACK_IMPORTED_MODULE_9__["ImageComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"]], styles: [".row[_ngcontent-%COMP%] {\n    margin-left: 40px;\n    margin-right: 20px;\n    \n}\n.offers[_ngcontent-%COMP%] {\n    \n    \n    height: 100px;\n    background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpsyluJKA7Q557c4jRCyqxlTUbP3Km0R4IBhBF3plBQ&s\");\n    \n}\n.offersClass[_ngcontent-%COMP%] {\n    height: 200px;\n    width: 90%;\n}\n.mat-elevation-z7[_ngcontent-%COMP%]{\n    margin-right: 20px;\n    width: 300px;\n    margin-left: 40px;\n    margin-top: 10px;\n}\n.example-spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n  }\n.example-spacer-buy[_ngcontent-%COMP%] {\n    margin-left: 100px;\n}\n.d-block[_ngcontent-%COMP%] {\n    height: 500px;\n}\n#backgroundImageCard[_ngcontent-%COMP%] {\n    background-image: url(\"https://cdn.pixabay.com/photo/2019/05/25/23/38/doctor-4229348_960_720.jpg\");\n    align-content: center;\n    height: 500px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n}\n.lead[_ngcontent-%COMP%] {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size:x-large;\n}\n.example-spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n  }\n\n.mat-elevation-z3[_ngcontent-%COMP%]{\n    margin-right: 20px;\n    width: 200px;\n    margin-left: 45px;\n    margin-top: 10px;\n    \n    \n}\n#p-name[_ngcontent-%COMP%]{\n    font-size: 15px;\n    text-align: center;\n    \n}\n#p-price[_ngcontent-%COMP%]{\n    font-size: 15px;\n    text-align: center;\n}\n.example-card[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin-bottom: 8px;\n  }\n\n.mat-elevation-z1[_ngcontent-%COMP%]{\n    margin-right: 20px;\n    width: 200px;\n    margin-left: 45px;\n    margin-top: 20px;\n    height: 70px;\n    margin-bottom: 20px;\n  }\n.mat-elevation-z2[_ngcontent-%COMP%]{\n    margin-right: 20px;\n    width: 200px;\n    margin-left: 45px;\n    margin-top: 20px;\n    height: 60px;\n    \n  }\n.halfPriceImages[_ngcontent-%COMP%] {\n    margin-right: 12px;\n   \n    \n  }\n.shopImages[_ngcontent-%COMP%] {\n    \n    width: 185px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtc2VjdGlvbi1sb2dnZWRpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7QUFDQTs7O0lBR0ksYUFBYTtJQUNiLDZIQUE2SDs7QUFFakk7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztFQUNoQjtBQUNGO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrR0FBa0c7SUFDbEcscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksbUpBQW1KO0lBQ25KLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztFQUNoQjtBQUVBLHFDQUFxQztBQUNyQztJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjs7O0FBR3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCOztBQUV0QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUdBLDBEQUEwRDtBQUMxRDtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTs7RUFFZDtBQUNBO0lBQ0Usa0JBQWtCOzs7RUFHcEI7QUFDRjs7SUFFSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImhvbWUtc2VjdGlvbi1sb2dnZWRpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIFxufVxuLm9mZmVycyB7XG4gICAgXG4gICAgXG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSd3BzeWx1SktBN1E1NTdjNGpSQ3lxeGxUVWJQM0ttMFI0SUJoQkYzcGxCUSZzXCIpO1xuICAgIFxufVxuLm9mZmVyc0NsYXNzIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5tYXQtZWxldmF0aW9uLXo3e1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5leGFtcGxlLXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbi5leGFtcGxlLXNwYWNlci1idXkge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLmQtYmxvY2sge1xuICAgIGhlaWdodDogNTAwcHg7XG59XG4jYmFja2dyb3VuZEltYWdlQ2FyZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxOS8wNS8yNS8yMy8zOC9kb2N0b3ItNDIyOTM0OF85NjBfNzIwLmpwZ1wiKTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmxlYWQge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6eC1sYXJnZTtcbn1cbi5leGFtcGxlLXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuICAvKiBzcGVjaWFsIENTUyBGT1IgSGFsZiBwcmljZSBzdG9yZSAqL1xuICAubWF0LWVsZXZhdGlvbi16M3tcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgXG4gICAgXG59XG5cbiNwLW5hbWV7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbn1cblxuI3AtcHJpY2V7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cblxuXG4gIC8qIFNwZWNpYWwgY29kZSBmb3IgU2hvcCBieSBjYXRlZ29yeSAgYW5kIHNob3AgQnkgYnJhbmRzICovXG4gIC5tYXQtZWxldmF0aW9uLXoxe1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAubWF0LWVsZXZhdGlvbi16MntcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIFxuICB9XG4gIC5oYWxmUHJpY2VJbWFnZXMge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgIFxuICAgIFxuICB9XG4uc2hvcEltYWdlcyB7XG4gICAgXG4gICAgd2lkdGg6IDE4NXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeSectionLoggedinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-section-loggedin',
                templateUrl: './home-section-loggedin.component.html',
                styleUrls: ['./home-section-loggedin.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_Service_buyer_product_service_service__WEBPACK_IMPORTED_MODULE_3__["BuyerProductServiceService"] }, { type: src_app_Service_final_cart_service__WEBPACK_IMPORTED_MODULE_4__["FinalCartService"] }]; }, null); })();


/***/ }),

/***/ "njMl":
/*!******************************************************************************************!*\
  !*** ./src/app/Home-Landing-After-Loggedin/footer-loggedin/footer-loggedin.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FooterLoggedinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterLoggedinComponent", function() { return FooterLoggedinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterLoggedinComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterLoggedinComponent.ɵfac = function FooterLoggedinComponent_Factory(t) { return new (t || FooterLoggedinComponent)(); };
FooterLoggedinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterLoggedinComponent, selectors: [["app-footer-loggedin"]], decls: 70, vars: 0, consts: [[1, "footer_area", "section_padding_130_0", 2, "background-color", "aliceblue"], [1, "container"], [1, "row"], [1, "col-12", "col-sm-6", "col-lg-4"], [1, "single-footer-widget", "section_padding_0_130"], [1, "footer-logo", "mb-3"], [1, "copywrite-text", "mb-5"], [1, "mb-0"], [1, "col-12", "col-sm-6", "col-lg"], [1, "widget-title"], [1, "footer_menu"], ["href", "#"]], template: function FooterLoggedinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Apna Pharmacy is your single go to place to find all type of medicines in a convenient manner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A9 2022-2023 ApnaPharmacy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Corporate Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Terms & Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Term & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Help & Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Call Centre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Email Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Term & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Help Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{margin-top:30px;}\n.footer_area[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n    overflow: hidden;\nwebkit-box-shadow: 0 8px 48px 8px rgba(47, 91, 234, 0.175);\n    box-shadow: 0 8px 48px 8px rgba(47, 91, 234, 0.175);\n    padding:60px;\n}\n.footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin-left: -25px;\n    margin-right: -25px;\n}\n.footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-10[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-11[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-8[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-9[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-auto[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-1[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-10[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-11[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-2[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-5[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-7[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-9[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-auto[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-1[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-10[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-11[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-8[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-9[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-auto[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-1[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-10[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-11[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-12[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-2[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-3[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-5[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-7[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-8[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-9[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-sm-auto[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-1[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-10[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-11[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-12[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-2[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-3[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-4[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-5[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-6[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-7[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-8[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-9[_ngcontent-%COMP%], .footer_area[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-auto[_ngcontent-%COMP%] {\n    padding-right: 25px;\n    padding-left: 25px;\n}\n.single-footer-widget[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .copywrite-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #747794;\n    font-size: 1rem;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .copywrite-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .single-footer-widget[_ngcontent-%COMP%]   .copywrite-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #3f43fd;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .widget-title[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .footer_menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #747794;\n    margin-bottom: 1rem;\n    display: block;\n    font-size: 1rem;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .footer_menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .single-footer-widget[_ngcontent-%COMP%]   .footer_menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #3f43fd;\n}\n.single-footer-widget[_ngcontent-%COMP%]   .footer_menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n}\n.footer_social_area[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n}\n.footer_social_area[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    height: 40px;\n    text-align: center;\n    width: 40px;\n    display: inline-block;\n    background-color: #f5f5ff;\n    line-height: 40px;\n    box-shadow: none;\n    margin-right: 10px;\n}\n.footer_social_area[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    line-height: 36px;\n}\n.footer_social_area[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .footer_social_area[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #ffffff;\n}\n@keyframes bi-cycle {\n    0% {\n        left: 0;\n    }\n    100% {\n        left: 100%;\n    }\n}\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci1sb2dnZWRpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUssZUFBZSxDQUFDO0FBQ3JCO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEIsMERBQTBEO0lBQ3RELG1EQUFtRDtJQUNuRCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzRUksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUVqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxjQUFjO0FBQ2xCO0FBV0E7SUFDSTtRQUNJLE9BQU87SUFDWDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZCIsImZpbGUiOiJmb290ZXItbG9nZ2VkaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7bWFyZ2luLXRvcDozMHB4O31cbi5mb290ZXJfYXJlYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbndlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA0OHB4IDhweCByZ2JhKDQ3LCA5MSwgMjM0LCAwLjE3NSk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggNDhweCA4cHggcmdiYSg0NywgOTEsIDIzNCwgMC4xNzUpO1xuICAgIHBhZGRpbmc6NjBweDtcbn1cbi5mb290ZXJfYXJlYSAucm93IHtcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjVweDtcbn1cbi5mb290ZXJfYXJlYSAucm93IC5jb2wsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTEsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTEwLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC0xMSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtMTIsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTIsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTMsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTQsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTUsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTYsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTcsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTgsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLTksXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLWF1dG8sXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLWxnLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy0xLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy0xMCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbGctMTEsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLWxnLTEyLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy0yLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy0zLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy00LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy01LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy02LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy03LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy04LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy05LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1sZy1hdXRvLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1tZCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtMSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtMTAsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLW1kLTExLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1tZC0xMixcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtMixcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtMyxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtNCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtNSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtNixcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtNyxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtOCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtOSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtbWQtYXV0byxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtc20sXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTEsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTEwLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC1zbS0xMSxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wtc20tMTIsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTIsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTMsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTQsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTUsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTYsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTcsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTgsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLTksXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXNtLWF1dG8sXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXhsLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC0xLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC0xMCxcbi5mb290ZXJfYXJlYSAucm93IC5jb2wteGwtMTEsXG4uZm9vdGVyX2FyZWEgLnJvdyAuY29sLXhsLTEyLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC0yLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC0zLFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC00LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC01LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC02LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC03LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC04LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC05LFxuLmZvb3Rlcl9hcmVhIC5yb3cgLmNvbC14bC1hdXRvIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLnNpbmdsZS1mb290ZXItd2lkZ2V0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbn1cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCAuY29weXdyaXRlLXRleHQgYSB7XG4gICAgY29sb3I6ICM3NDc3OTQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuLnNpbmdsZS1mb290ZXItd2lkZ2V0IC5jb3B5d3JpdGUtdGV4dCBhOmhvdmVyLFxuLnNpbmdsZS1mb290ZXItd2lkZ2V0IC5jb3B5d3JpdGUtdGV4dCBhOmZvY3VzIHtcbiAgICBjb2xvcjogIzNmNDNmZDtcbn1cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCAud2lkZ2V0LXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uc2luZ2xlLWZvb3Rlci13aWRnZXQgLmZvb3Rlcl9tZW51IGxpIGEge1xuICAgIGNvbG9yOiAjNzQ3Nzk0O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuLnNpbmdsZS1mb290ZXItd2lkZ2V0IC5mb290ZXJfbWVudSBsaSBhOmhvdmVyLFxuLnNpbmdsZS1mb290ZXItd2lkZ2V0IC5mb290ZXJfbWVudSBsaSBhOmZvY3VzIHtcbiAgICBjb2xvcjogIzNmNDNmZDtcbn1cbi5zaW5nbGUtZm9vdGVyLXdpZGdldCAuZm9vdGVyX21lbnUgbGk6bGFzdC1jaGlsZCBhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZm9vdGVyX3NvY2lhbF9hcmVhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbn1cbi5mb290ZXJfc29jaWFsX2FyZWEgYSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZmY7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmZvb3Rlcl9zb2NpYWxfYXJlYSBhIGkge1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xufVxuLmZvb3Rlcl9zb2NpYWxfYXJlYSBhOmhvdmVyLFxuLmZvb3Rlcl9zb2NpYWxfYXJlYSBhOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJpLWN5Y2xlIHtcbiAgICAwJSB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBiaS1jeWNsZSB7XG4gICAgMCUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICB9XG59XG5vbCBsaSwgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbm9sLCB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterLoggedinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-loggedin',
                templateUrl: './footer-loggedin.component.html',
                styleUrls: ['./footer-loggedin.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pDcK":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        return items.filter(item => {
            return Object.keys(item).some(key => {
                return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
            });
        });
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'search'
            }]
    }], null, null); })();


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class SignupComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 1, vars: 0, template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponent1, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponent1", function() { return routingComponent1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _SellerUI_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SellerUI/add-product/add-product.component */ "MF6t");
/* harmony import */ var _SellerUI_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SellerUI/home/home.component */ "wrd7");
/* harmony import */ var _SellerUI_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SellerUI/my-profile/my-profile.component */ "BcYC");
/* harmony import */ var _SellerUI_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SellerUI/order-history/order-history.component */ "RpJL");
/* harmony import */ var _SellerUI_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SellerUI/view-product/view-product.component */ "Zjfa");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _Home_Landing_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Home-Landing/header/header.component */ "Jb39");
/* harmony import */ var _BuyerProductListUi_buyer_product_buyer_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BuyerProductListUi/buyer-product/buyer-product.component */ "WYAh");
/* harmony import */ var _finalcartui_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./finalcartui/cart/cart.component */ "cfwO");
/* harmony import */ var _Home_Landing_After_Loggedin_header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Home-Landing-After-Loggedin/header-loggedin/header-loggedin.component */ "aoUv");
/* harmony import */ var _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-description/product-description.component */ "EyC3");

















const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    // {path:'signup',  component:SignupComponent},
    { path: '', component: _Home_Landing_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"] },
    { path: 'profile', component: _SellerUI_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__["MyProfileComponent"] },
    { path: 'add-product', component: _SellerUI_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"] },
    { path: 'view-product', component: _SellerUI_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_6__["ViewProductComponent"] },
    { path: 'order-history', component: _SellerUI_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryComponent"] },
    { path: 'SellerHome', component: _SellerUI_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'buyerproduct', component: _BuyerProductListUi_buyer_product_buyer_product_component__WEBPACK_IMPORTED_MODULE_11__["BuyerComponent"] },
    { path: 'finalcart', component: _finalcartui_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"] },
    { path: 'app-header-loggedin', component: _Home_Landing_After_Loggedin_header_loggedin_header_loggedin_component__WEBPACK_IMPORTED_MODULE_13__["HeaderLoggedinComponent"] },
    { path: 'product-description', component: _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_14__["ProductDescriptionComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponent1 = [_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"]];
const routingComponents = [_SellerUI_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _SellerUI_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__["MyProfileComponent"], _SellerUI_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"], _SellerUI_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_6__["ViewProductComponent"], _SellerUI_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryComponent"]];


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Service_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Service/authentication-service.service */ "kKRD");
/* harmony import */ var _Service_login_advanced_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/login-advanced.service */ "YWh5");
/* harmony import */ var _Header_for_login_register_login_header_login_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Header-for-login-register/login-header/login-header.component */ "P2sg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Header&Footer/f-all/f-all.component */ "kTK9");











function LoginComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required in proper format");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(route, router, authService, login) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.login = login;
        this.success = "Logged in successfully!";
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    ngOnInit() {
    }
    get username() {
        return this.loginForm.get('email');
    }
    get password() {
        return this.loginForm.get('password');
    }
    get f() {
        return this.loginForm.controls;
    }
    loginProcess() {
        //console.log(this.username.value)
        localStorage.setItem('email', JSON.stringify(this.username.value));
        this.authService.login(this.loginForm.value).subscribe((response) => {
            //console.log(response.token);
            //console.log(response);
            localStorage.setItem("email", this.loginForm.value.email);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Logged In Succesfully", "You have Logged In Succesfully!", "success");
            //console.log("home")
            this.router.navigate(["/"]);
        }, error => {
            this.message = "*Incorrect username and password";
        });
    }
    forLogin() {
        localStorage.setItem('email', JSON.stringify(this.username.value));
        console.log(localStorage);
        this.login.generateToken(this.loginForm.value).subscribe((data) => {
            console.log('success');
            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Logged In Succesfully", "You have Logged In Succesfully!", "success");
            this.login.loginUser(data.token);
            this.login.getCurrentUser(this.username.value, data.token).subscribe((user) => {
                this.login.setUser(user);
                console.log(user);
                //redirect
                this.router.navigate(["/app-header-loggedin"]);
            });
        }, (error) => {
            console.log('Error');
            console.log(error);
            this.message = "*Incorrect username and password";
        });
    }
    goToRegister() {
        this.router.navigate(["/register"]);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Service_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Service_login_advanced_service__WEBPACK_IMPORTED_MODULE_5__["LoginAdvancedService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 31, vars: 5, consts: [["id", "bgcolor", 1, "p-3", "bg-light", "text-dark"], [1, "page"], [1, "container"], [1, "row"], [1, "col-sm-8"], ["src", ".\\.\\assets\\img-pr\\medicine4.jpg", "width", "100%", "height", "100%", "alt", "Loading..", 1, "img-fluid"], [1, "col-sm-4"], [1, "font-weight-bold", "py-3", 2, "text-align", "center"], ["autocomplete", "false", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "mb-3"], ["type", "email", "placeholder", "Email Address", "formControlName", "email", "autocomplete", "off", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "placeholder", "********", "formControlName", "password", "autocomplete", "off", 1, "form-control"], [1, "col-lg-7"], ["type", "submit", 1, "btn1", "mt-2", "mb-5"], [1, "text-danger"], [2, "text-align", "center"], ["routerLink", "/register"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() { return ctx.forLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_span_14_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_span_15_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_span_19_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Register here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-f-all");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f["email"].getError("required") != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f["email"].getError("email") != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f["password"].getError("required") != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [_Header_for_login_register_login_header_login_header_component__WEBPACK_IMPORTED_MODULE_6__["LoginHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_8__["FAllComponent"]], styles: ["#bgcolor[_ngcontent-%COMP%]{\n    height: 750px;\n    }\n\n\n\n.page[_ngcontent-%COMP%]{\n background-color: white;\n margin-top: 120px;\n border-radius : 30px;\n justify-content: center;\n padding-left: 0px;\n padding-right: 50px;\n width: 75%;\n margin-left: 160px;;\n }\n\n\n\n.col[_ngcontent-%COMP%]{\njustify-content: center;\n\n}\n\n\n\n.btn1[_ngcontent-%COMP%]{\n border: none;\n outline: none;\n height: 40px;\n width: 50%;\n background-color: rgb(69, 25, 230);\n color: white;\n border-radius: 4px;\n font-weight: bold;\n margin-left: 110px;\n padding-bottom: 0px;}\n\n\n\nimg[_ngcontent-%COMP%]{\n     border-top-left-radius: 30px;\n     border-bottom-left-radius: 30px;\n    \n     margin: 0px;\n     padding: 0px;\n     height: 355px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFDSSxhQUFhO0lBQ2I7Ozs7QUFJSjtDQUNDLHVCQUF1QjtDQUN2QixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLHVCQUF1QjtDQUN2QixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEI7Ozs7QUFHQTtBQUNELHVCQUF1Qjs7QUFFdkI7Ozs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsWUFBWTtDQUNaLFVBQVU7Q0FDVixrQ0FBa0M7Q0FDbEMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG1CQUFtQixDQUFDOzs7O0FBR3BCO0tBQ0ksNEJBQTRCO0tBQzVCLCtCQUErQjs7S0FFL0IsV0FBVztLQUNYLFlBQVk7S0FDWixhQUFhO0NBQ2pCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4jYmdjb2xvcntcbiAgICBoZWlnaHQ6IDc1MHB4O1xuICAgIH1cblxuXG5cbi5wYWdle1xuIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuIG1hcmdpbi10b3A6IDEyMHB4O1xuIGJvcmRlci1yYWRpdXMgOiAzMHB4O1xuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuIHBhZGRpbmctbGVmdDogMHB4O1xuIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gd2lkdGg6IDc1JTtcbiBtYXJnaW4tbGVmdDogMTYwcHg7O1xuIH1cbiBcbiBcbiAuY29se1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbn1cblxuLmJ0bjF7XG4gYm9yZGVyOiBub25lO1xuIG91dGxpbmU6IG5vbmU7XG4gaGVpZ2h0OiA0MHB4O1xuIHdpZHRoOiA1MCU7XG4gYmFja2dyb3VuZC1jb2xvcjogcmdiKDY5LCAyNSwgMjMwKTtcbiBjb2xvcjogd2hpdGU7XG4gYm9yZGVyLXJhZGl1czogNHB4O1xuIGZvbnQtd2VpZ2h0OiBib2xkO1xuIG1hcmdpbi1sZWZ0OiAxMTBweDtcbiBwYWRkaW5nLWJvdHRvbTogMHB4O31cblxuXG4gaW1ne1xuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgIFxuICAgICBtYXJnaW46IDBweDtcbiAgICAgcGFkZGluZzogMHB4O1xuICAgICBoZWlnaHQ6IDM1NXB4O1xuIH1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _Service_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationServiceService"] }, { type: _Service_login_advanced_service__WEBPACK_IMPORTED_MODULE_5__["LoginAdvancedService"] }]; }, null); })();


/***/ }),

/***/ "wrd7":
/*!*************************************************!*\
  !*** ./src/app/SellerUI/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Header&Footer/f-all/f-all.component */ "kTK9");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 35, vars: 0, consts: [[1, "z"], [1, "c"], [1, "container", 2, "padding", "40px"], ["src", "/assets/image/ApnaPharmacyLogo.jpeg", 1, "logoClass2"], [1, "row", "align-items-center"], ["id", "navBrand", 1, "order-lg-center", "col-lg-6", "col-sm-3", "col-3"], ["href", "http://localhost:4200", 1, "navbar-brand", 2, "font-family", "sans-serif", "text-align", "right"], [1, "box4"], [1, "box3"], ["src", "/assets/image/1.ico", "height", "20px"], ["routerLink", "/app-header-loggedin", "routerLinkActive", "active"], ["src", "/assets/image/3.ico", "height", "20px"], ["routerLink", "/view-product", "routerLinkActive", "active"], ["src", "/assets/image/4.ico", "height", "20px"], ["routerLink", "/add-product", "routerLinkActive", "active"], ["src", "/assets/image/7.ico", "height", "20px"], ["routerLink", "/", "routerLinkActive", "active"], [1, "box"], [1, "box5"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "APNA PHARMACY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "View Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-f-all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _Header_Footer_f_all_f_all_component__WEBPACK_IMPORTED_MODULE_2__["FAllComponent"]], styles: [".z[_ngcontent-%COMP%]{\n    margin: 0%;\n    padding: 0%;\n}\n.box[_ngcontent-%COMP%]{\n    position: absolute;\n    margin-left: 10%;\n    margin-right: 0%;\n    height: 620px;\n    width: 90%;\n    border: 2px solid black;\n    background-image: url('/assets/image/map.ico');\n}\n.c[_ngcontent-%COMP%]{\n    display: flex;\n    border: 2px solid black;\n    width: 100%;\n}\n.box1[_ngcontent-%COMP%]{\n    height: 100%;\n    background-color: white;\n}\n.box2[_ngcontent-%COMP%]{\n    height: 100%;\n    color: aquamarine;\n    margin-left: 40%;\n    \n    margin-top: 2%;\n    \n}\n.box4[_ngcontent-%COMP%]{\n    display: flex;\n    border: 2px solid black;\n    height: 80%;\n    width: 100%;\n}\n.box3[_ngcontent-%COMP%]{\n    height: 620px;\n    width: 10%;\n    background-color: aliceblue;\n}\n.box3[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    margin-left: 5%;\n}\n.box5[_ngcontent-%COMP%]{\n    margin: 20px;\n    padding: 20px;\n    border: 2px solid black;\n    border-radius: 40px;\n    background-color: white;\n}\n.box6[_ngcontent-%COMP%]{\n    background-color: aquamarine;\n}\n.header_pharmacy_logo[_ngcontent-%COMP%]{\n    -o-object-fit: contain;\n       object-fit: contain;\n    width: 100px;\n    margin: 12px 20px 0px 2px;\n  }\n\n#searchfull[_ngcontent-%COMP%] {\n    width: 50%;\n    align-content: center;\n  }\n.logoClass2[_ngcontent-%COMP%] {\n    height: 4rem;\n    position: absolute;\n    left: 5px;\n    top :10px;\n  }\n#navBrand[_ngcontent-%COMP%] {\n    width: 10rem;\n    position: absolute;\n    margin-left: 33rem;\n    \n  }\n#Features[_ngcontent-%COMP%] {\n    width: 35rem;\n    position: absolute;\n    margin-left: 65rem;\n    \n    \n  }\n.MyNav[_ngcontent-%COMP%] {\n    \n    background-color: aliceblue;\n  }\nheader[_ngcontent-%COMP%]{\n    background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpsyluJKA7Q557c4jRCyqxlTUbP3Km0R4IBhBF3plBQ&s\");\n  \n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qiw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxzQkFBbUI7T0FBbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7QUFDQTs7O0tBR0c7QUFDSDtJQUNFLFVBQVU7SUFDVixxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7RUFDWDtBQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7O0VBRXBCO0FBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjs7O0VBR3BCO0FBQ0E7SUFDRTt5QkFDcUI7SUFDckIsMkJBQTJCO0VBQzdCO0FBQ0E7SUFDRSw2SEFBNkg7OztFQUcvSCIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi56e1xuICAgIG1hcmdpbjogMCU7XG4gICAgcGFkZGluZzogMCU7XG59XG4uYm94e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogMCU7XG4gICAgaGVpZ2h0OiA2MjBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZS9tYXAuaWNvJyk7XG59XG4uY3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmJveDF7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmJveDJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiBhcXVhbWFyaW5lO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIC8qIG1hcmdpbi1yaWdodDogMzAlOyAqL1xufVxuLmJveDR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5ib3gze1xuICAgIGhlaWdodDogNjIwcHg7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG59XG4uYm94MyBkaXZ7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLmJveDV7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5ib3g2e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG59XG4uaGVhZGVyX3BoYXJtYWN5X2xvZ297XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiAxMnB4IDIwcHggMHB4IDJweDtcbiAgfVxuICAvKiAubmF2YmFyLWJyYW5kIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgfSAqL1xuICAjc2VhcmNoZnVsbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmxvZ29DbGFzczIge1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcCA6MTBweDtcbiAgfVxuICAjbmF2QnJhbmQge1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDMzcmVtO1xuICAgIFxuICB9XG4gICNGZWF0dXJlcyB7XG4gICAgd2lkdGg6IDM1cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogNjVyZW07XG4gICAgXG4gICAgXG4gIH1cbiAgLk15TmF2IHtcbiAgICAvKiBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICB9XG4gIGhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSd3BzeWx1SktBN1E1NTdjNGpSQ3lxeGxUVWJQM0ttMFI0SUJoQkYzcGxCUSZzXCIpO1xuICBcbiAgICBcbiAgfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "x+0O":
/*!**********************************************************!*\
  !*** ./src/app/Home-Landing/material/material.module.ts ***!
  \**********************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");






class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map