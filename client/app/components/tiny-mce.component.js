"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by pkulenkamp on 06/12/2016.
 */
var core_1 = require('@angular/core');
var TinyMceComponent = (function () {
    function TinyMceComponent() {
        this.onEditorKeyup = new core_1.EventEmitter();
    }
    TinyMceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            menubar: false,
            statusbar: false,
            toolbar: 'alignleft aligncenter alignright alignjustify ' +
                '| outdent indent | bullist numlist | table | link | styleselect | forecolor backcolor',
            selector: '#' + this.elementId,
            plugins: ['link', 'paste', 'table', 'lists', 'textcolor', 'autoresize'],
            autoresize_bottom_margin: 5,
            autoresize_max_height: 300,
            style_formats: [
                {
                    title: "Font",
                    items: [
                        { title: 'Andale Mono', inline: 'span', styles: { 'font-family': 'andale mono' } },
                        { title: 'Arial', inline: 'span', styles: { 'font-family': 'arial' } },
                        { title: 'Arial Black', inline: 'span', styles: { 'font-family': 'arial black' } },
                        { title: 'Book Antiqua', inline: 'span', styles: { 'font-family': 'book antiqua' } },
                        { title: 'Comic Sans MS', inline: 'span', styles: { 'font-family': 'comic sans ms,sans-serif' } },
                        { title: 'Courier New', inline: 'span', styles: { 'font-family': 'courier new,courier' } },
                        { title: 'Georgia', inline: 'span', styles: { 'font-family': 'georgia,palatino' } },
                        { title: 'Helvetica', inline: 'span', styles: { 'font-family': 'helvetica' } },
                        { title: 'Impact', inline: 'span', styles: { 'font-family': 'impact,chicago' } },
                        { title: 'Open Sans', inline: 'span', styles: { 'font-family': 'Open Sans' } },
                        { title: 'Symbol', inline: 'span', styles: { 'font-family': 'symbol' } },
                        { title: 'Tahoma', inline: 'span', styles: { 'font-family': 'tahoma' } },
                        { title: 'Terminal', inline: 'span', styles: { 'font-family': 'terminal,monaco' } },
                        { title: 'Times New Roman', inline: 'span', styles: { 'font-family': 'times new roman,times' } },
                        { title: 'Trebuchet MS', inline: 'span', styles: { 'font-family': 'trebuchet ms' } },
                        { title: 'Verdana', inline: 'span', styles: { 'font-family': 'Verdana' } },
                        { title: 'Webdings', inline: 'span', styles: { 'font-family': 'webdings' } },
                        { title: 'Wingdings', inline: 'span', styles: { 'font-family': 'wingdings' } }
                    ]
                },
                { title: "Font Size", items: [
                        { title: '8pt', inline: 'span', styles: { fontSize: '12px', 'font-size': '8px' } },
                        { title: '10pt', inline: 'span', styles: { fontSize: '12px', 'font-size': '10px' } },
                        { title: '12pt', inline: 'span', styles: { fontSize: '12px', 'font-size': '12px' } },
                        { title: '14pt', inline: 'span', styles: { fontSize: '12px', 'font-size': '14px' } },
                        { title: '16pt', inline: 'span', styles: { fontSize: '12px', 'font-size': '16px' } },
                        { title: '18pt', inline: 'span', styles: { fontSize: '12px', 'font-size': '18px' } },
                        { title: '20pt', inline: 'span', styles: { fontSize: '12px', 'font-size': '20px' } },
                        { title: '22pt', inline: 'span', styles: { fontSize: '12px', 'font-size': '22px' } },
                        { title: '24pt', inline: 'span', styles: { fontSize: '12px', 'font-size': '24px' } }
                    ]
                },
                {
                    title: "Headers",
                    items: [
                        { title: "Header 1", format: "h1" },
                        { title: "Header 2", format: "h2" },
                        { title: "Header 3", format: "h3" },
                        { title: "Header 4", format: "h4" },
                        { title: "Header 5", format: "h5" },
                        { title: "Header 6", format: "h6" }
                    ]
                },
                {
                    title: "Inline", items: [{ title: "Bold", icon: "bold", format: "bold" }, { title: "Italic", icon: "italic", format: "italic" },
                        { title: "_Underline", icon: "underline", format: "underline" }, { title: "Strikethrough", icon: "strikethrough", format: "strikethrough" }, { title: "Superscript", icon: "superscript", format: "superscript" }, { title: "Subscript", icon: "subscript", format: "subscript" }, { title: "Code", icon: "code", format: "code" }] },
                { title: "Blocks", items: [{ title: "Paragraph", format: "p" }, { title: "Blockquote", format: "blockquote" }, { title: "Div", format: "div" }, { title: "Pre", format: "pre" }] },
            ],
            skin_url: 'assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    var content = editor.getContent();
                    _this.onEditorKeyup.emit(content);
                });
            },
        });
    };
    TinyMceComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TinyMceComponent.prototype, "elementId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TinyMceComponent.prototype, "onEditorKeyup", void 0);
    TinyMceComponent = __decorate([
        core_1.Component({
            selector: 'tiny-mce',
            template: "<textarea id=\"{{elementId}}\"></textarea>"
        }), 
        __metadata('design:paramtypes', [])
    ], TinyMceComponent);
    return TinyMceComponent;
}());
exports.TinyMceComponent = TinyMceComponent;
//# sourceMappingURL=tiny-mce.component.js.map