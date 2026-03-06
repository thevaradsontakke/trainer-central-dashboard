import React from 'react';
import { Plus, Filter, Grid, List, Layers, TrendingUp, Clock, Users } from 'lucide-react';
import { Course } from '../types';
import { cn } from '../lib/utils';

const courses: Course[] = [
  {
    id: '1',
    title: 'Cybersecurity Fundamentals for Remote Teams',
    category: 'Technology',
    level: 'Beginner',
    status: 'Published',
    modules: 12,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHENcEAw1Ock3YXJh1ayY259Bjeq4gkATgwO9tCzcEVH0ccJyo1FwnKav7psmECm_MprFCONBjZjGJ_x14PsTMcnyXS9kp1TWM8s2X2Mv4EWBmdI88MlAJTWxzpE-jNumgNJ-kLjPo7Zzwimv0m-H---bMeCXg_BcMrztGGTdVNvRhKL48kb6DJB7h87XRH0_clM-ywbUw7yfxeSRosF498PTxvDGwV4FMRQJu6wBr9UKojFBQmhVkFYeH5B2qLyNq9GNOzfmEtbc',
    updatedAt: '2d ago'
  },
  {
    id: '2',
    title: 'Executive Decision Making: Data-Driven Strategies',
    category: 'Leadership',
    level: 'Advanced',
    status: 'Draft',
    modules: 8,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCek00f5P4z9TSJhUx-vQyoXVtP2jIR1R7EqDHD-yMME9jnmg1DbmQfrActofPdBETcozGvA9A9yLr4XGQ2f2qrk7VjIBhoGTy2V3x4lAYTFew92kAYd36yeyRz8eIL_EtwrdQq9l4Ic6fdHhbKv-ncVKA1BJYZ5d-zyo27DFGUk4DDaiVPvSk5O4CNXlcpR-qfb9VJQadvjJrrLqeo4cyWmXnp0hAFOGCsGAmQrswqloHwKW49vLiIAaAVfI9Ou62QpWHq-DlV5g',
    updatedAt: '2d ago'
  },
  {
    id: '3',
    title: 'Effective Communication in Hybrid Workplaces',
    category: 'Soft Skills',
    level: 'Intermediate',
    status: 'Published',
    modules: 15,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYMwb7VrUcXa1CgZ_389CUWDBYjcz4UeHc9GGj7o_j6NCC5ZezSNZP8zA0ECsEBIX9oZXiFDFUGMgykEHnyIwlxFm-Yq3VcUCAw4hlPrdrDXdO_fotps0n47ZT2oqkJ_wboEbm3TLK09OjNDFxn4TuEribILFqPtl1uCE1p_jznL5eSTH_NmbU39Tzt6yLPc_pkv3kwqEliHXQQtFVLlvgIfc8DODnajGIWKZQBmGGE7gnxNnC4JZCSUc7AbU46osT6Xd4-KcXJeA',
    updatedAt: '1w ago'
  },
  {
    id: '4',
    title: 'Advanced Financial Modeling for Analysts',
    category: 'Business',
    level: 'Intermediate',
    status: 'Published',
    modules: 20,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS5e94KraqqLN9lJpbNesHAfcmTwgBP7Xodg3x_Jl-KBLoxtfk0qnwH6qnQC0kGxhQQi8YM2cNXcAclZ7ZKx_XE4cCxf1lcWMR4F7xa28ZPL-kjZztrlRPpUrviKhums__tZUDRqsDYawNoCOZ5TdDiYhIayxulnI90JUMfxf_erwbp6Fv1m-EahSlGIOSPWOe435scD4_Ly1tlrhfhVyu3j_zGijJkuzl57HqQVDp48cVx-cnoXRu41fwWRVECXZ1UzFuJTzB1XI',
    updatedAt: '3d ago',
    demand: 'High'
  }
];

export const CourseManagement: React.FC<{ onCreateNew: () => void }> = ({ onCreateNew }) => {
  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Course Management</h2>
          <p className="text-slate-500 mt-1">Design, publish, and track your organization's learning curriculum.</p>
        </div>
        <button 
          onClick={onCreateNew}
          className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
        >
          <Plus size={18} />
          Create New Course
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap items-center gap-3">
        {['Category', 'Level', 'Author'].map((filter) => (
          <button key={filter} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:border-primary transition-colors">
            <Filter size={16} className="text-slate-400" />
            {filter}
            <span className="material-symbols-outlined text-lg">expand_more</span>
          </button>
        ))}
        <div className="h-6 w-px bg-slate-300 mx-1"></div>
        <button className="text-sm font-medium text-primary hover:underline">Clear all filters</button>
        
        <div className="ml-auto flex bg-slate-200/50 p-1 rounded-lg">
          <button className="p-1.5 bg-white rounded shadow-sm">
            <Grid size={18} className="text-slate-700" />
          </button>
          <button className="p-1.5 text-slate-500">
            <List size={18} />
          </button>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className={cn(
            "group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all border-b-4",
            course.status === 'Published' ? "border-b-primary/40" : "border-b-amber-400/40"
          )}>
            <div className="aspect-video relative overflow-hidden bg-slate-100">
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className={cn(
                "absolute top-3 right-3 px-2 py-1 backdrop-blur rounded text-[10px] font-bold uppercase tracking-wider",
                course.status === 'Published' ? "bg-white/90 text-slate-900" : "bg-amber-100 text-amber-700"
              )}>
                {course.status}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{course.category}</span>
                <span className="size-1 bg-slate-300 rounded-full"></span>
                <span className="text-[10px] font-medium text-slate-500 uppercase">{course.level}</span>
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 min-h-[3rem]">
                {course.title}
              </h3>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-slate-400" />
                  <span className="text-xs text-slate-500 font-medium">{course.modules} Modules</span>
                </div>
                {course.demand === 'High' ? (
                  <div className="flex items-center gap-1 text-slate-400">
                    <TrendingUp size={14} className="text-primary" />
                    <span className="text-[10px] font-bold text-primary">High Demand</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock size={14} />
                    <span className="text-[10px]">Updated {course.updatedAt}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Add New Card Placeholder */}
        <div 
          onClick={onCreateNew}
          className="group border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center p-8 text-slate-400 hover:border-primary hover:text-primary cursor-pointer transition-all bg-white/30"
        >
          <div className="size-12 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
            <Plus size={24} />
          </div>
          <p className="font-bold text-sm">Add New Course</p>
          <p className="text-xs text-slate-500 mt-1">Start building your curriculum</p>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-12 flex items-center justify-between pb-8">
        <p className="text-sm text-slate-500">Showing 1 to 4 of 24 courses</p>
        <div className="flex gap-2">
          <button className="size-9 flex items-center justify-center border border-slate-200 rounded-lg hover:bg-white disabled:opacity-50" disabled>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="size-9 flex items-center justify-center bg-primary text-white rounded-lg font-bold text-sm">1</button>
          <button className="size-9 flex items-center justify-center border border-slate-200 rounded-lg hover:bg-white font-bold text-sm">2</button>
          <button className="size-9 flex items-center justify-center border border-slate-200 rounded-lg hover:bg-white font-bold text-sm">3</button>
          <button className="size-9 flex items-center justify-center border border-slate-200 rounded-lg hover:bg-white">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};
