
# Drag-and-Drop File Library

The **Drag-and-Drop File Library** is a lightweight JavaScript library for adding drag-and-drop file upload functionality to your web applications. It provides an easy-to-use API to handle file drag-and-drop events and enables seamless file uploads.

## Features

- Drag and drop files from your file system onto a designated area on your web page.
- Customize the drop area by specifying any HTML element.
- Receive file objects in your JavaScript code for further processing or uploading.

## Installation

To use the **Drag-and-Drop File Library** in your project, you can install it via npm:

```
npm install drag-and-drop-file-library
```

Alternatively, you can include it directly in your HTML file:

```html
<script src="path/to/drag-and-drop-file-library.js"></script>
```

## Usage

```javascript
// Import the library
import DragAndDropFileLibrary from 'drag-and-drop-file-library';

// Initialize the library with an HTML element
const dropArea = document.getElementById('drop-area');
const fileLibrary = new DragAndDropFileLibrary(dropArea);

// Listen for file events
fileLibrary.on('file', (file) => {
  // Handle the dropped file
  console.log('Dropped file:', file);
});
```

## API

### `new DragAndDropFileLibrary(element: HTMLElement)`

Creates a new instance of the library attached to the specified HTML element.

- `element`: The HTML element where the drag-and-drop functionality will be applied.

### Events

The **Drag-and-Drop File Library** emits the following event:

- `'file'`: Triggered when a file is dropped onto the designated area. The callback function receives the dropped `File` object as its argument.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
