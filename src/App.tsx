import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen, Brain, Briefcase, Calculator,
  CheckCircle2, FileText, GraduationCap,
  LineChart, Mail, Phone, Settings, ShieldCheck,
  Star, Target, Users, Wrench, Download, User2, Zap,
  Clock, ArrowRight, BookMarked, Sparkles, Quote
} from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // HƯỚNG DẪN KẾT NỐI GOOGLE SHEET:
      // 1. Mở link Sheet: https://docs.google.com/spreadsheets/d/1HzByErHD07IbAtgskLSv6-OM6twxxhIuCxKllSX6--U/edit?usp=sharing
      // 2. Vào Tiện ích mở rộng (Extensions) > Apps Script
      // 3. Copy đoạn code tạo Web App để nhận dữ liệu POST và dán vào đó.
      // 4. Triển khai (Deploy) > Tùy chọn triển khai mới > Ứng dụng Web (Web App), đặt quyền truy cập là "Bất kỳ ai" (Anyone).
      // 5. Copy Web App URL và dán vào biến scriptURL bên dưới.

      const scriptURL = 'https://script.google.com/macros/s/AKfycbwg8ByMexx5uLdhBsCrN6s8D_cDUkXuJSm7m_g46VHDotC3S6AFOQhQ7Le603WLuJ7sHg/exec'; // <-- THAY URL VÀO ĐÂY

      if (scriptURL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
        // Tạm thời mô phỏng gửi thành công khi chưa thay URL Apps Script
        console.log('Dữ liệu sẽ được gửi vào Sheet:', formData);
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
        }, 1200);
        return;
      }

      // Format dữ liệu để chuẩn bị gửi lên Google Apps Script
      const data = new FormData();
      data.append('Name', formData.name);
      data.append('Phone', formData.phone);
      data.append('Email', formData.email);

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: data,
        mode: 'no-cors' // Cần thiết để tránh lỗi CORS khi gọi Web App
      });

      // Đối với mode no-cors, fetch sẽ không trả về status 200 trong response trực tiếp, 
      // nhưng nếu không ném ra lỗi thì mặc định là đã gửi
      setIsSubmitted(true);
    } catch (error) {
      console.error('Lỗi kết nối tới Sheet!', error);
      alert('Có lỗi xảy ra khi đăng ký, vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-screen font-sans">
      
      {/* --- HERO SECTION (Navy & Gold) --- */}
      <section className="relative w-full overflow-hidden bg-brand-navy-900">
        <div className="absolute inset-0 animate-gradient-bg bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-brand-navy-700 via-brand-navy-900 to-[#030815] z-0" />
        
        {/* Decorative elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-gold-500/10 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-navy-700/50 rounded-full blur-[150px] pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold-500/30 bg-brand-navy-800/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-brand-gold-400" />
              <span className="text-brand-gold-300 text-sm font-medium tracking-wide uppercase">Sách mới dành cho người làm Tài chính - Kế toán</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl/tight font-heading font-bold text-white">
              <span className="text-gradient-gold">AI trong</span> <br />
              Tài chính - Kế toán
            </h1>
            
            <p className="text-xl text-slate-300 font-serif italic border-l-4 border-brand-gold-500 pl-6 rounded-sm">
              "Hiểu đúng – Ứng dụng nhanh – Dẫn đầu trong thời đại AI"
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
               <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl glass-panel-dark text-slate-200 text-sm font-medium">
                  <BookOpen className="w-5 h-5 text-brand-gold-400" /> 19 Chương
               </div>
               <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl glass-panel-dark text-slate-200 text-sm font-medium">
                  <FileText className="w-5 h-5 text-brand-gold-400" /> 120 Trang
               </div>
               <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl glass-panel-dark text-slate-200 text-sm font-medium">
                  <Zap className="w-5 h-5 text-brand-gold-400" /> Update 2026
               </div>
            </div>
            
            <div className="pt-6">
              <p className="text-slate-400 text-sm mb-4 uppercase tracking-widest font-semibold text-brand-gold-500">Tác giả</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-navy-700 border-2 border-brand-gold-500 flex items-center justify-center overflow-hidden">
                  <Users className="w-6 h-6 text-brand-gold-300" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg font-heading">Nguyễn Vũ Huy Hoàng</p>
                  <p className="text-slate-400 text-sm">Chuyên gia đào tạo AI & Chuyển đổi số</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Book Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 w-full flex justify-center lg:justify-end"
          >
            <div className="relative pt-10" style={{ perspective: '1200px' }}>
              <div 
                className="relative w-64 md:w-80 aspect-[1/1.4] transition-transform duration-700 hover:-translate-y-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] group animate-float mx-auto"
                style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-25deg) rotateX(5deg)' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotateY(-15deg) rotateX(2deg)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotateY(-25deg) rotateX(5deg)'; }}
              >
                {/* Front Cover */}
                <div className="absolute inset-0 rounded-r-lg overflow-hidden border border-brand-navy-700 bg-brand-navy-900 shadow-xl" style={{ transform: 'translateZ(20px)', backfaceVisibility: 'hidden' }}>
                   <img 
                      src="https://lh3.googleusercontent.com/d/1oTGjIc6f4NXjX943o2OCQ2qwNidKfit-" 
                      alt="AI trong Tài chính - Kế toán" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-white/10 to-transparent mix-blend-overlay pointer-events-none"></div>
                   <div className="absolute top-0 left-0 w-6 h-full bg-gradient-to-r from-black/30 to-transparent pointer-events-none"></div>
                </div>

                {/* Back Cover */}
                <div className="absolute inset-0 bg-brand-navy-900 rounded-lg border border-brand-navy-700" style={{ transform: 'rotateY(180deg) translateZ(20px)' }}></div>

                {/* Spine */}
                <div 
                   className="absolute top-0 flex items-center justify-center bg-brand-navy-900 border-l border-y border-brand-navy-700 overflow-hidden shadow-[inset_10px_0_20px_rgba(0,0,0,0.5)]"
                   style={{ left: '-20px', width: '40px', height: '100%', transform: 'rotateY(-90deg)' }}
                >
                   <span className="text-brand-gold-400 text-xs font-bold tracking-[0.3em] uppercase rotate-180 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
                      AI TRONG TÀI CHÍNH KẾ TOÁN
                   </span>
                </div>

                {/* Pages Edge */}
                <div 
                   className="absolute top-[2%] bg-[#efefef] flex flex-col justify-evenly overflow-hidden rounded-r-[2px] border-y border-r border-[#dcdcdc]"
                   style={{ right: '-20px', width: '40px', height: '96%', transform: 'rotateY(90deg)' }}
                >
                   {[...Array(25)].map((_, i) => <div key={i} className="w-full h-[1px] bg-black/5"></div>)}
                </div>

                {/* Shadow */}
                <div 
                   className="absolute -bottom-10 left-0 right-0 h-10 bg-black/50 blur-2xl rounded-[100%]"
                   style={{ transform: 'translateZ(-10px)' }}
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FORM SECTION (Overlapping Hero) --- */}
      <section className="relative z-20 w-full px-6 -mt-16 mb-20">
        <div className="max-w-4xl mx-auto glass-panel-light p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(6,17,42,0.05)] border-brand-gold-400/30">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-brand-navy-900 mb-2">Đăng ký nhận sách ngay</h2>
            <p className="text-slate-500 font-medium">Sổ tay thực chiến từ kế toán viên đến CFO.</p>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-8 text-center"
            >
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-brand-navy-900 mb-2">Đăng ký thành công!</h3>
              <p className="text-slate-500">Chúng tôi sẽ liên hệ và gửi thông tin đến email của bạn trong thời gian sớm nhất.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-brand-navy-800 ml-1">Họ và tên</label>
                <div className="relative">
                  <User2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="input-soft" placeholder="Nguyễn Văn A" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-brand-navy-800 ml-1">Số điện thoại</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="input-soft" placeholder="09xx xxx xxx" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-brand-navy-800 ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="input-soft" placeholder="email@example.com" />
                </div>
              </div>
              <div className="md:col-span-3 mt-4">
                <button disabled={isSubmitting} type="submit" className="w-full py-4 bg-gradient-to-r from-brand-gold-400 to-brand-gold-600 hover:from-brand-gold-500 hover:to-brand-gold-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-[0_10px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.4)] disabled:opacity-75 disabled:hover:translate-y-0 disabled:cursor-not-allowed">
                  <span className="text-lg">{isSubmitting ? 'Đang gửi thông tin...' : 'Nhận Sách Điển Tử Miễn Phí'}</span>
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* --- THE PROBLEM SECTION (Light Cream) --- */}
      <section className="w-full px-6 py-20 bg-brand-cream-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy-900 mb-6">Bạn đang hao phí bao nhiêu thời gian?</h2>
            <p className="text-slate-600 text-lg">
              Giữa kỷ nguyên công nghệ 4.0, người làm tài chính - kế toán vẫn đang vật lộn với hàng tá bảng tính nội bộ, 
              dữ liệu rời rạc và việc làm báo cáo mất quá nhiều thời gian công sức.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Làm báo cáo thủ công", desc: "Mất hàng giờ đồng hồ để tổng hợp, đối chiếu và làm sạch dữ liệu từ nhiều nguồn khác nhau." },
              { icon: Target, title: "Sai sót số liệu", desc: "Làm việc với khối lượng dữ liệu khổng lồ dễ dẫn đến những sai sót không đáng có, ảnh hưởng trực tiếp đến quyết định." },
              { icon: LineChart, title: "Thiếu thời gian phân tích", desc: "Quá bận rộn với các nghiệp vụ cơ bản, không còn thời gian để phân tích chuyên sâu báo cáo quản trị." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] transition-all flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-cream-50 group-hover:bg-brand-gold-50 transition-colors flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-brand-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy-900 mb-3">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOLUTION/PILLARS SECTION (White) --- */}
      <section className="w-full px-6 py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cream-50/50 skew-x-12 transform origin-top-right z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <span className="text-brand-gold-600 font-bold tracking-widest uppercase text-sm mb-4 block">Cốt lõi nội dung</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy-900">Khám Phá Sức Mạnh Của AI <br className="hidden md:block"/>Qua 3 Trụ Cột</h2>
           </motion.div>

           <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                   icon: Brain,
                   title: "Mindset (Tư duy)",
                   subtitle: "Tư duy AI chiến lược",
                   features: ["Hiểu đúng về bản chất AI trong kế toán.", "Vượt qua rào cản tâm lý sợ bị thay thế.", "Định vị vai trò mới của người làm tài chính."]
                },
                {
                   icon: Settings,
                   title: "Skillset (Kỹ năng)",
                   subtitle: "Kỹ năng vững vàng",
                   features: ["Kỹ năng Prompt Engineering cho tài chính.", "Kỹ năng phân tích dữ liệu lớn với AI.", "Bảo mật thông tin khi làm việc cùng AI."]
                },
                {
                   icon: Wrench,
                   title: "Toolset (Công cụ)",
                   subtitle: "Công cụ thực chiến",
                   features: ["Làm chủ ChatGPT, Claude cho tác vụ hằng ngày.", "Sử dụng AI tạo dashboard quản trị tự động.", "Các công cụ chuyên biệt tối ưu hóa số liệu."]
                }
              ].map((pillar, idx) => (
                 <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-[0_10px_40px_rgba(6,17,42,0.03)] relative overflow-hidden group hover:border-brand-gold-200 transition-all">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold-300 to-brand-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    
                    <div className="w-14 h-14 rounded-full bg-brand-navy-50 flex items-center justify-center mb-6 text-brand-navy-800">
                       <pillar.icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold text-brand-navy-900 mb-1">{pillar.title}</h3>
                    <p className="text-brand-gold-600 font-medium mb-6">{pillar.subtitle}</p>
                    
                    <ul className="space-y-4">
                       {pillar.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex gap-3 text-slate-600">
                             <CheckCircle2 className="w-5 h-5 text-brand-gold-500 flex-shrink-0 mt-0.5 opacity-80" />
                             <span>{feature}</span>
                          </li>
                       ))}
                    </ul>
                 </motion.div>
              ))}
           </div>
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
             className="mt-16 inline-flex flex-col md:flex-row items-center justify-center gap-4 bg-brand-cream-50 px-8 py-5 rounded-2xl border border-brand-gold-200/50"
           >
             <BookMarked className="w-8 h-8 text-brand-gold-500" />
             <p className="text-brand-navy-800 font-medium text-lg">
               Được đúc kết từ những <strong className="text-gradient-gold font-bold">Case Study thực tế</strong> quá trình đào tạo.
             </p>
           </motion.div>
        </div>
      </section>

      {/* --- TARGET AUDIENCE (Navy Highlight) --- */}
      <section className="w-full px-6 py-24 bg-brand-navy-900 relative overflow-hidden">
        {/* Subtle background patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
           <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">Cuốn sách này dành cho ai?</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-brand-gold-400 to-brand-gold-600 mx-auto rounded-full"></div>
           </motion.div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: Briefcase, label: "CEO" },
                { icon: Calculator, label: "CFO" },
                { icon: ShieldCheck, label: "Kế toán trưởng" },
                { icon: FileText, label: "Kế toán viên" },
                { icon: LineChart, label: "Nhà quản trị" },
                { icon: Users, label: "Nhân sự văn phòng" },
              ].map((role, idx) => (
                <motion.div
                   key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                   className="flex flex-col items-center justify-center p-8 border border-white/10 rounded-[2rem] bg-white/5 hover:bg-white/10 hover:border-brand-gold-500/50 transition-all group"
                >
                  <role.icon className="w-12 h-12 text-brand-gold-400 mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <span className="font-medium text-slate-200 text-center">{role.label}</span>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* --- AUTHOR SECTION (Cream & Gold) --- */}
      <section className="w-full px-6 py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Photos side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
            {/* 3D Book Mockup */}
            <div className="relative z-10 pt-4" style={{ perspective: '1200px' }}>
              <div 
                className="relative w-64 md:w-80 aspect-[1/1.4] transition-transform duration-700 group mx-auto"
                style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-25deg) rotateX(5deg)' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotateY(-15deg) rotateX(2deg)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotateY(-25deg) rotateX(5deg)'; }}
              >
                {/* Front Cover */}
                <div className="absolute inset-0 rounded-r-lg overflow-hidden border border-brand-navy-700 bg-brand-navy-900 shadow-2xl" style={{ transform: 'translateZ(20px)', backfaceVisibility: 'hidden' }}>
                   <img 
                      src="https://lh3.googleusercontent.com/d/1rYtfm3uJ6LT5LZ4XFAW-Cm_SOWNzq3w1" 
                      alt="AI trong Tài chính - Kế toán" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-white/10 to-transparent mix-blend-overlay pointer-events-none"></div>
                   <div className="absolute top-0 left-0 w-6 h-full bg-gradient-to-r from-black/30 to-transparent pointer-events-none"></div>
                </div>

                {/* Back Cover */}
                <div className="absolute inset-0 bg-brand-navy-900 rounded-lg border border-brand-navy-700" style={{ transform: 'rotateY(180deg) translateZ(20px)' }}></div>

                {/* Spine */}
                <div 
                   className="absolute top-0 flex items-center justify-center bg-brand-navy-900 border-l border-y border-brand-navy-700 overflow-hidden shadow-[inset_10px_0_20px_rgba(0,0,0,0.5)]"
                   style={{ left: '-20px', width: '40px', height: '100%', transform: 'rotateY(-90deg)' }}
                >
                   <span className="text-brand-gold-400 text-xs font-bold tracking-[0.3em] uppercase rotate-180 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
                      AI TRONG TÀI CHÍNH KẾ TOÁN
                   </span>
                </div>

                {/* Pages Edge */}
                <div 
                   className="absolute top-[2%] bg-[#efefef] flex flex-col justify-evenly overflow-hidden rounded-r-[2px] border-y border-r border-[#dcdcdc]"
                   style={{ right: '-20px', width: '40px', height: '96%', transform: 'rotateY(90deg)' }}
                >
                   {[...Array(25)].map((_, i) => <div key={i} className="w-full h-[1px] bg-black/5"></div>)}
                </div>

                {/* Shadow */}
                <div 
                   className="absolute -bottom-10 left-0 right-0 h-10 bg-black/20 blur-2xl rounded-[100%]"
                   style={{ transform: 'translateZ(-10px)' }}
                ></div>
              </div>
            </div>

            {/* Floating Stats Block */}
            <div className="absolute -bottom-8 lg:bottom-12 -right-4 lg:-right-12 z-20 bg-white p-6 rounded-3xl shadow-[0_20px_40px_rgba(212,175,55,0.15)] border border-brand-gold-100 max-w-[240px] animate-soft-pulse">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-brand-gold-50 rounded-xl text-brand-gold-600">
                    <GraduationCap className="w-6 h-6" />
                 </div>
                 <div>
                    <span className="block text-3xl font-bold font-heading text-brand-navy-900 mb-1">500+</span>
                    <p className="text-sm text-slate-500 font-medium">Doanh nghiệp đã được đào tạo</p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Bio side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex-[1.2] space-y-8 mt-12 lg:mt-0"
          >
            <div>
              <p className="text-brand-gold-600 tracking-widest text-sm font-bold uppercase mb-3">Tác giả sách</p>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-navy-900">Nguyễn Vũ Huy Hoàng</h2>
              <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-brand-navy-50 rounded-full border border-brand-navy-100">
                <Settings className="w-5 h-5 text-brand-navy-800" />
                <span className="text-brand-navy-800 font-semibold text-sm">Chuyên gia đào tạo AI và Chuyển đổi số</span>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                 <Quote className="w-12 h-12 text-brand-gold-200 flex-shrink-0" fill="currentColor"/>
                 <p className="text-slate-600 text-lg leading-relaxed pt-2">
                   Trong hơn <strong className="text-brand-navy-900">3 năm</strong> qua, đã trực tiếp đào tạo AI & huấn luyện doanh nghiệp cho gần <strong className="text-brand-gold-600">500 đơn vị, tổ chức</strong> tại Việt Nam.
                 </p>
              </div>
              
              <div className="bg-brand-cream-50 p-6 md:p-8 rounded-3xl border border-slate-100">
                <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify">
                  Hàng nghìn học viên từ các thương hiệu lớn như: <strong>Toshiba, Wipro, Lizen, MobiFone, Petrovietnam, Điện Lực, Bệnh viện Đại học Y Dược, Vietcombank, MB Bank, BIDV,...</strong> đến các cơ quan ban ngành. <br/><br/>
                  Cuốn sách này là sự đúc kết từ hàng ngàn giờ thực chiến, giúp người làm tài chính - kế toán có cái nhìn từ tổng quan chiến lược đến chi tiết thực hành để làm chủ công nghệ AI.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- FOOTER & CONTACT (Navy) --- */}
      <footer className="w-full bg-brand-navy-900 pt-20 pb-10 px-6 border-t-[8px] border-brand-gold-500 relative overflow-hidden">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
          
          <div className="max-w-sm">
            <h3 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-2">
              <BookOpen className="text-brand-gold-400" /> 
              AI trong Tài chính
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Sổ tay thực chiến cho người đi làm từ kế toán viên đến CFO. Hiểu đúng bản chất, ứng dụng nhanh chóng, dẫn đầu thời đại.
            </p>
            <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="inline-flex items-center gap-2 text-brand-gold-400 hover:text-brand-gold-300 font-semibold text-sm transition-colors uppercase tracking-wide">
              Đăng ký ngay <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-6">Thông tin liên hệ</h4>
            <div className="flex flex-col gap-5">
              <a href="tel:0949124620" className="flex items-center gap-4 text-slate-300 hover:text-brand-gold-400 transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center group-hover:bg-brand-gold-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-brand-gold-300" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Điện thoại / Zalo</p>
                  <p className="font-bold text-white">0949 124 620</p>
                </div>
              </a>
              <a href="mailto:nguyenvuhuyhoangpr@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-brand-gold-400 transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center group-hover:bg-brand-gold-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-brand-gold-300" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="font-bold text-white">nguyenvuhuyhoangpr@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
          
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-xs text-slate-500">
            © 2026 Nguyễn Vũ Huy Hoàng. All rights reserved.
          </p>
          <div className="text-xs text-slate-500 flex gap-4">
             <a href="#" className="hover:text-white transition-colors">Điều khoản</a>
             <a href="#" className="hover:text-white transition-colors">Bảo mật</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
