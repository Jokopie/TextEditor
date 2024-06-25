import Link from 'next/link'
import { Suspense } from 'react'
import { Menu, Search, LayoutGrid, Circle, Plus, EllipsisVertical, List, ArrowDownAZ, 
         Folder, ExternalLink, 
 } from 'lucide-react'
export default function HomePage() {
    return (
      <div>
        {/* Header */}
        <div className='flex m-5 w-full h-16 items-center mb-1.5'>
            <Menu className='ml-2'/> 
            <label className='ml-5'>Document</label>
            <div className='h-3/4 flex border rounded-lg bg-slate-200 ml-96 items-center' style={{ width: '500px' }}>
              <Search className='ml-2'/>
              <label className='ml-5'>Search</label>
            </div>
            <LayoutGrid style={{ marginLeft: '400px' }}/>
            <Circle className='ml-10 scale-125'/>
        </div>

        {/* Template */}
        <div className='bg-slate-100 w-full' style={{ height: '320px' }}>
          <div className='flex'>
            <label className='mt-5 ml-52 inline-block'> Start a new document </label>
            <EllipsisVertical className='mt-5' style={{ marginLeft:'850px'}}/>
          </div>
          <div className='flex'>
            <div>
              <Link href='/main'>
                <div className='hover:border hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-48 flex items-center justify-center'><Plus/></div>
              </Link>
              <label className='mt-5 inline-block ml-48'>Blank document</label>
            </div>
            <div>
              <div className='hover:border hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
              <label className='mt-5 inline-block ml-10'>Resume</label>
            </div>
            <div>
              <div className='hover:border hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
              <label className='mt-5 inline-block ml-10'>Letter</label>
            </div>
            <div>
              <div className='hover:border hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
              <label className='mt-5 inline-block ml-10'>Project</label>
            </div>
            <div>
              <div className='hover:border hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
              <label className='mt-5 inline-block ml-10'>Brochure</label>
            </div>
            <div>
              <div className='hover:border hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
              <label className='mt-5 inline-block ml-10'>Report</label>
            </div>
          </div>
        </div>

        {/* Recent */}
        <div>
          <div className='flex mt-5'>
            <label className='ml-52'>Recent documents</label>
            <List style={{ marginLeft:'800px'}}/>
            <ArrowDownAZ className='ml-5'/>
            <Folder className='ml-5'/>
          </div>
          <div className='flex'>
            <div>
              <div className='border border-gray-500 hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-48 flex items-center justify-center'><ExternalLink/></div>
              <label className='mt-5 inline-block ml-48'>Untitled document</label>
            </div>
            <div>
              <div className='border border-gray-500 hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
              <label className='mt-5 inline-block ml-10'>Untitled document</label>
            </div>
            <div>
              <div className='border border-gray-500 hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
              <label className='mt-5 inline-block ml-10'>Untitled document</label>
            </div>
            <div>
              <div className='border border-gray-500 hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
              <label className='mt-5 inline-block ml-10'>Untitled document</label>
            </div>
            <div>
              <div className='border border-gray-500 hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
              <label className='mt-5 inline-block ml-10'>Untitled document</label>
            </div>
            <div>
              <div className='border border-gray-500 hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
              <label className='mt-5 inline-block ml-10'>Untitled document</label>
            </div>
          </div>
        </div>
      </div>
    );
  }