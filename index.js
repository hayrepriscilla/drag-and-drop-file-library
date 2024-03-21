import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { EventEmitter } from 'events';

class DragAndDropFileLibrary extends EventEmitter {
  constructor(element) {
    super();
    this.element = element;
    this.init();
  }

  init() {
    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      this.element.addEventListener(eventName, this.preventDefaults.bind(this), false);
    });

    // Highlight drop area when a file is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
      this.element.addEventListener(eventName, this.highlight.bind(this), false);
    });

    // Remove highlight when file is dragged away
    ['dragleave', 'drop'].forEach(eventName => {
      this.element.addEventListener(eventName, this.unhighlight.bind(this), false);
    });

    // Handle dropped files
    this.element.addEventListener('drop', this.handleDrop.bind(this), false);
  }

  preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  highlight() {
    this.element.classList.add('highlight');
  }

  unhighlight() {
    this.element.classList.remove('highlight');
  }

  handleDrop(e) {
    const files = e.dataTransfer.files;
    if (files.length) {
      this.emit('file', files[0]);
    }
  }
}

export default DragAndDropFileLibrary;
