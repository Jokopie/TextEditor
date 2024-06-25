'use client'

import '../../style/styles.scss'
import{ Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import NotesPicker  from "@/components/ui/NotePicker";
import Notes from '@/components/ui/Notes';
import Tiptap  from "@/components/ui/Tiptap";
import  {useForm} from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { File, Star, SquareChevronRight, Cloud, MessageSquareText, ChevronDown, Video, Lock, } from "lucide-react";
import Link from 'next/link'
//quill
import Quill from "quill"
import "quill/dist/quill.snow.css"
import { useEffect } from 'react';

export default function Mainpage(){
  const formSchema = z.object({
    title: z
            .string()
            .min(5)
            .max(100),
    price: z
            .number()
            .min(5),
    description: z
            .string()
            .trim(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      price: 29.99,
      description: "",
    }
  })
  //function onSubmit(values: z.infer<typeof formSchema>){}
  // <form onSubmit={form.handleSubmit(onSubmit)}></form>
  return( 
    <main className="pt-5 p-10">
      {/* <NotesPicker /> */}
      <Form {...form}>
        <form>
          {/* Menubar */}
          <div className="flex items-center space-x-4 pt-5">
            <Link href='/'><File className="size-12"/></Link>
            <div>
              <FormField
                control = {form.control}
                name = "title"
                render = {({ field }) => (
                  <FormItem>
                    {/* <FormLabel> Title </FormLabel> */}
                    <FormControl>
                      <Input className="h-7 w-72 -mt-5" placeholder="Main title of your document" { ...field }></Input>
                    </FormControl>
                    {/* <FormMessage/> */}
                  </FormItem>
                )}
              />
              <FormLabel className=''> File </FormLabel>
              <FormLabel className='ml-3'> Edit </FormLabel>
              <FormLabel className='ml-3'> View </FormLabel>
              <FormLabel className='ml-3'> Insert </FormLabel>
              <FormLabel className='ml-3'> Format </FormLabel>
              <FormLabel className='ml-3'> Tools </FormLabel>
              <FormLabel className='ml-3'> Extensions </FormLabel>
              <FormLabel className='ml-3'> Help </FormLabel>
              <div className="flex space-x-5 ml-72 -mt-12">
                <Star className="h-5 w-5 ml-3"/>
                <SquareChevronRight className="h-5 w-5"/>
                <Cloud className="h-5 w-5"/>
              </div>
              <div className='flex space-x-5 -mt-6' style={{position: 'fixed', right: '300px'}}>
                <MessageSquareText/>
                <Video/>
                <Lock/>
                <label>Share</label>
                <ChevronDown/>
              </div>
            </div>
            
          </div>
          {/* Toolbar & workspace */}
          <FormField
            control = {form.control}
            name = "description"
            render = {({ field }) => (
              <FormItem>
                {/* <FormLabel> Description </FormLabel> */}
                <FormControl>
                  <Tiptap description={field.name} onChange={field.onChange} />
                </FormControl>
                {/* <FormMessage/> */}
              </FormItem>
            )}
          />
          {/* <Button className="my-4" type="submit">
            Submit
          </Button> */}
        </form>
      </Form>
      <Notes/>
    </main>
  )
}

//extra Share
// import '../style/Share/styles.scss'
// import { TiptapCollabProvider } from '@hocuspocus/provider'
// import CharacterCount from '@tiptap/extension-character-count'
// import Collaboration from '@tiptap/extension-collaboration'
// import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
// import Highlight from '@tiptap/extension-highlight'
// import TaskItem from '@tiptap/extension-task-item'
// import TaskList from '@tiptap/extension-task-list'
// import { EditorContent, useEditor } from '@tiptap/react'
// import StarterKit from '@tiptap/starter-kit'
// import React, {
//   useCallback, useEffect,
//   useState,
// } from 'react'
// import * as Y from 'yjs'
// import MenuBar from '../Share/Menubar'

// const colors = ['#958DF1', '#F98181', '#FBBC88', '#FAF594', '#70CFF8', '#94FADB', '#B9F18D']
// const names = ['Lea Thompson', 'Cyndi Lauper', 'Tom Cruise', 'Madonna', 'Jerry Hall', 'Joan Collins', 
//                'Winona Ryder', 'Christina Applegate', 'Alyssa Milano', 'Molly Ringwald', 'Ally Sheedy',
//                'Debbie Harry', 'Olivia Newton-John', 'Elton John', 'Michael J. Fox', 'Axl Rose', 'Lisa Bonet',
//                'Emilio Estevez', 'Ralph Macchio', 'Rob Lowe', 'Jennifer Grey', 'Mickey Rourke', 'John Cusack',
//                'Matthew Broderick', 'Justine Bateman', ]
// const getRandomElement = list => list[Math.floor(Math.random() * list.length)]
// const getRandomColor = () => getRandomElement(colors)
// const getRandomName = () => getRandomElement(names)
// const ydoc = new Y.Doc()
// const websocketProvider = new TiptapCollabProvider({
//   appId: '7j9y6m10',
//   name: "room1",
//   document: ydoc,
// })
// const getInitialUser = () => {
//   return JSON.parse(localStorage.getItem('currentUser')) || {
//     name: getRandomName(),
//     color: getRandomColor(),
//   }
// }
// export function Share(){
//   const [status, setStatus] = useState('connecting')
//   const [currentUser, setCurrentUser] = useState(getInitialUser)

//   const editor = useEditor({
//     extensions: [
//       StarterKit.configure({
//         history: false,
//       }),
//       Highlight,
//       TaskList,
//       TaskItem,
//       CharacterCount.configure({
//         limit: 10000,
//       }),
//       Collaboration.configure({
//         document: ydoc,
//       }),
//       CollaborationCursor.configure({
//         provider: websocketProvider,
//       }),
//     ],
//   })

//   useEffect(() => {
//     websocketProvider.on('status', event => {
//       setStatus(event.status)
//     })
//   }, [])

//   // Save current user to localStorage and emit to editor
//   useEffect(() => {
//     if (editor && currentUser) {
//       localStorage.setItem('currentUser', JSON.stringify(currentUser))
//       editor.chain().focus().updateUser(currentUser).run()
//     }
//   }, [editor, currentUser])

//   const setName = useCallback(() => {
//     const name = (window.prompt('Name') || '').trim().substring(0, 32)

//     if (name) {
//       return setCurrentUser({ ...currentUser, name })
//     }
//   }, [currentUser])

//   return (
//     <div className="editor">
//       {editor && <MenuBar editor={editor} />}
//       <EditorContent className="editor__content" editor={editor} />
//       <div className="editor__footer">
//         <div className={`editor__status editor__status--${status}`}>
//           {status === 'connected'
//             ? `${editor.storage.collaborationCursor.users.length} user${editor.storage.collaborationCursor.users.length === 1 ? '' : 's'} online in Room1}`
//             : 'offline'}
//         </div>
//         <div className="editor__name">
//           <button onClick={setName}>{currentUser.name}</button>
//         </div>
//       </div>
//     </div>
//   )
// }