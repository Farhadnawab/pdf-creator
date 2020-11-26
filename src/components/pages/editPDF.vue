<template>
<div class="h-full">
  <div class="mb-6 text-right">
      <router-link to="/add" class="bg-blue-500 px-4 py-2 rounded inline-block text-white hover:bg-blue-600 font-semibold">
        <i class="fa fa-plus-circle"></i>  Add PDF
      </router-link>
  </div>
  <div class="flex h-full">
    <div class="editor bg-gray-200 w-1/2 border border-gray-400 rounded p-2">
      <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
        <div class="menubar">

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <i class="fa fa-bold"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <i class="fa fa-italic"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <i class="fa fa-strikethrough"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <i class="fa fa-underline"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          >
            <i class="fa fa-code"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.paragraph() }"
            @click="commands.paragraph"
          >
            <i class="fa fa-paragraph"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            H1
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            H2
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            H3
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <i class="fa fa-list"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <i class="fa fa-list-ol"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
          >
            <i class="fa fa-quote-right"></i>
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            Code
          </button>

          <button
            class="menubar__button"
            @click="commands.horizontal_rule"
          >
            HR
          </button>

          <button
            class="menubar__button"
            @click="commands.undo"
          >
            <i class="fa fa-undo"></i>
          </button>

          <button
            class="menubar__button"
            @click="commands.redo"
          >
            <i class="fa fa-redo"></i>
          </button>

        </div>
      </editor-menu-bar>

      <editor-content class="editor__content" :editor="editor" />
    </div>

    <div class="preview ml-2 bg-white p-4 w-1/2 rounded flex items-center justify-center">
      <span class="font-bold text-2xl text-gray-400">PREVIEW</span>
    </div>
  </div>
</div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'


export default {
  name: 'editPDF',
  components: {
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      id : 0,
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: '',
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  created(){
    this.setContentEditor();
  },
  watch:{
    $route (to, from){
      this.setContentEditor();
    }
  },
  methods: {
    getRecord(id){
      let pdfList = localStorage.getItem("pdfList");

      if (typeof pdfList !== 'undefined' && pdfList !== null){
        pdfList = JSON.parse(pdfList);
        
        let result = pdfList.filter(item => item.id == id);
        return result[0].body;
      }
    },

    setContentEditor(){
      this.id = this.$route.params.id;
      this.editor.setContent(this.getRecord(this.id));
    }
  }
}
</script>

<style scoped>
  .menubar__button {
    @apply border rounded p-1 m-1 text-sm uppercase font-semibold bg-white;
  }

  .editor__content {
    height:100%;
  }

  .editor__content .ProseMirror {
    height:100%;
    outline:0;
  }
</style>
