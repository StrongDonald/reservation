import { useState } from "react";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
const {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  ForeColor,
  BackColor,
  CleanFormatting,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  NumberedList,
  BulletedList,
  Undo,
  Redo,
  FontSize,
  FontName,
  FormatBlock,
  Link,
  Unlink,
  InsertImage,
  ViewHtml,
  InsertTable,
  InsertFile,
  SelectAll,
  Print,
  Pdf,
  AddRowBefore,
  AddRowAfter,
  AddColumnBefore,
  AddColumnAfter,
  DeleteRow,
  DeleteColumn,
  DeleteTable,
  MergeCells,
  SplitCell,
} = EditorTools;

const tools = [
  [Bold, Italic, Underline, Strikethrough],
  [Subscript, Superscript],
  ForeColor,
  BackColor,
  [CleanFormatting],
  [AlignLeft, AlignCenter, AlignRight, AlignJustify],
  [Indent, Outdent],
  [OrderedList, UnorderedList],
  [NumberedList, BulletedList],
  FontSize,
  FontName,
  FormatBlock,
  [SelectAll],
  [Undo, Redo],
  [Link, Unlink, InsertImage, ViewHtml],
  [InsertTable, InsertFile],
  [Pdf, Print],
  [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
  [DeleteRow, DeleteColumn, DeleteTable],
  [MergeCells, SplitCell],
];

const initialRichText = `<h1>Hello world</h1>
  <p>How are you doing?</p>
`;

const RichTextEditor = props => {
  const [richText, setRichText] = useState(initialRichText);

  const onChangeText = e => {
    setRichText(e.html);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(richText);
  };

  return (
    <div>
      <div className="k-d-flex k-gap-8">
        <div className="k-flex-grow" style={{ maxWidth: "50%" }}>
          <h2>Create Content Form</h2>
          <form onSubmit={handleSubmit}>
            <Editor
              defaultContent={richText}
              tools={tools}
              onChange={onChangeText}
              contentStyle={{ height: 200 }}
            />
          </form>
        </div>
        <div className="k-flex-grow">
          <h2>Parsed Editor Text</h2>
          <div dangerouslySetInnerHTML={{ __html: richText }} />
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;