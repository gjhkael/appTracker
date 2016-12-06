/**
 * Created by pkulenkamp on 06/12/2016.
 */
import {Component, OnDestroy, AfterViewInit, EventEmitter, Input, Output} from '@angular/core';

declare var tinymce: any;

@Component({
    selector: 'tiny-mce',
    template: `<textarea id="{{elementId}}"></textarea>`
})
export class TinyMceComponent implements AfterViewInit, OnDestroy {
    @Input() elementId: String;
    @Output() onEditorKeyup = new EventEmitter<any>();

    editor;

    ngAfterViewInit() {
        tinymce.init({
            menubar: false,
            statusbar: false,
            toolbar: 'alignleft aligncenter alignright alignjustify ' +
            '| outdent indent | bullist numlist | table | link | styleselect | forecolor backcolor',
            selector: '#' + this.elementId,
            plugins: ['link', 'paste', 'table', 'lists', 'textcolor', 'autoresize'],
            autoresize_bottom_margin: 5,
            autoresize_max_height: 300,
            style_formats:[
                {
                    title: "Font",
                    items: [
                        {title: 'Andale Mono', inline: 'span', styles: { 'font-family':'andale mono'}},
                        {title: 'Arial', inline: 'span', styles: { 'font-family':'arial'}},
                        {title: 'Arial Black', inline: 'span', styles: { 'font-family':'arial black'}},
                        {title: 'Book Antiqua', inline: 'span', styles: { 'font-family':'book antiqua'}},
                        {title: 'Comic Sans MS', inline: 'span', styles: { 'font-family':'comic sans ms,sans-serif'}},
                        {title: 'Courier New', inline: 'span', styles: { 'font-family':'courier new,courier'}},
                        {title: 'Georgia', inline: 'span', styles: { 'font-family':'georgia,palatino'}},
                        {title: 'Helvetica', inline: 'span', styles: { 'font-family':'helvetica'}},
                        {title: 'Impact', inline: 'span', styles: { 'font-family':'impact,chicago'}},
                        {title: 'Open Sans', inline: 'span', styles: { 'font-family':'Open Sans'}},
                        {title: 'Symbol', inline: 'span', styles: { 'font-family':'symbol'}},
                        {title: 'Tahoma', inline: 'span', styles: { 'font-family':'tahoma'}},
                        {title: 'Terminal', inline: 'span', styles: { 'font-family':'terminal,monaco'}},
                        {title: 'Times New Roman', inline: 'span', styles: { 'font-family':'times new roman,times'}},
                        {title: 'Trebuchet MS', inline: 'span', styles: { 'font-family':'trebuchet ms'}},
                        {title: 'Verdana', inline: 'span', styles: { 'font-family':'Verdana'}},
                        {title: 'Webdings', inline: 'span', styles: { 'font-family':'webdings'}},
                        {title: 'Wingdings', inline: 'span', styles: { 'font-family':'wingdings'}}
                    ]
                },
                {title: "Font Size", items: [
                    {title: '8pt', inline:'span', styles: { fontSize: '12px', 'font-size': '8px' } },
                    {title: '10pt', inline:'span', styles: { fontSize: '12px', 'font-size': '10px' } },
                    {title: '12pt', inline:'span', styles: { fontSize: '12px', 'font-size': '12px' } },
                    {title: '14pt', inline:'span', styles: { fontSize: '12px', 'font-size': '14px' } },
                    {title: '16pt', inline:'span', styles: { fontSize: '12px', 'font-size': '16px' } },
                    {title: '18pt', inline:'span', styles: { fontSize: '12px', 'font-size': '18px' } },
                    {title: '20pt', inline:'span', styles: { fontSize: '12px', 'font-size': '20px' } },
                    {title: '22pt', inline:'span', styles: { fontSize: '12px', 'font-size': '22px' } },
                    {title: '24pt', inline:'span', styles: { fontSize: '12px', 'font-size': '24px' } }
                ]
                }
                {
                    title: "Headers",
                    items: [
                        {title: "Header 1",format: "h1"},
                        {title: "Header 2",format: "h2"},
                        {title: "Header 3",format: "h3"},
                        {title: "Header 4",format: "h4"},
                        {title: "Header 5",format: "h5"},
                        {title: "Header 6",format: "h6"}
                    ]
                },
                {
                    title: "Inline",items: [{title: "Bold",icon: "bold",format: "bold"}, {title: "Italic",icon: "italic",format: "italic"},
                    {title: "_Underline",icon: "underline",format: "underline"}, {title: "Strikethrough",icon: "strikethrough",format: "strikethrough"}, {title: "Superscript",icon: "superscript",format: "superscript"}, {title: "Subscript",icon: "subscript",format: "subscript"}, {title: "Code",icon: "code",format: "code"}]},
                {title: "Blocks",items: [{title: "Paragraph",format: "p"}, {title: "Blockquote",format: "blockquote"}, {title: "Div",format: "div"}, {title: "Pre",format: "pre"}]},
                ],
            skin_url: 'assets/skins/lightgray',
            setup: editor => {
                this.editor = editor;
                editor.on('keyup', () => {
                    const content = editor.getContent();
                    this.onEditorKeyup.emit(content);
                });
            },
        });
    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
}