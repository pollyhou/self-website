import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';
import { useScrollReveal } from '@client/src/hooks/useScrollReveal';

function AnimatedCard({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ delay });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {children}
    </div>
  );
}

const HomePage = () => {
  const profileImage = 'https://miaoda.feishu.cn/aily/api/v1/feisuda/attachments/4d984a3c-1e14-4eb5-a187-e6fd78157ece/raw';
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div className="space-y-12">
      <section 
        ref={heroRef}
        className={`flex flex-col-reverse md:flex-row gap-6 md:gap-8 items-center md:items-start transition-all duration-700 ease-out ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex-1 w-full">
          <h1 className="mb-4">侯小雯</h1>
          <p className="text-[#424242] mb-6 leading-relaxed">
            本硕教育技术专业背景，拥有AI课程研发、系统培训、
            智能体搭建和数字化教学创新等项目经历。在国际教育与教育科技领域拥有丰富经验，
            致力于将前沿科技与教育实践深度融合。
          </p>
          <div className="mt-6 p-4 border border-[#f0f0f0] rounded-md hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:border-[#e0e0e0] transition-all duration-300">
            <h3 className="text-sm font-bold text-[#424242] mb-3">相关技能</h3>
            <div className="space-y-2 text-sm">
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                <span className="text-[#616161] shrink-0">编辑工具：</span>
                <span className="text-[#424242]">剪映、3Dmax、Final Cut Pro、Photoshop、Mirro、Xmind、Notion</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                <span className="text-[#616161] shrink-0">AI工具：</span>
                <span className="text-[#424242]">ChatGPT、Claude、Gemini、Figma、NotebookLM、Trae、Workbuddy、Dify</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#616161] shrink-0">语言能力：</span>
                <span className="text-[#424242]">普通话（母语）、英语（流利）</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[#f0f0f0] space-y-2 text-sm text-[#616161]">
            <p className="inline-flex items-center gap-2 hover:text-[#424242] transition-colors duration-200">
              <Phone className="w-4 h-4" />
              19916948172
            </p>
            <p className="inline-flex items-center gap-2 hover:text-[#424242] transition-colors duration-200">
              <Mail className="w-4 h-4" />
              Pollyhou123@gmail.com
            </p>
            <p className="inline-flex items-center gap-2 hover:text-[#424242] transition-colors duration-200">
              <MapPin className="w-4 h-4" />
              现所在地：杭州市
            </p>
          </div>
        </div>
        <div className="shrink-0 mx-auto md:mx-0">
          <img
            src={profileImage}
            alt="个人头像"
            className="w-[160px] md:w-[220px] h-auto rounded-full hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500"
          />
        </div>
      </section>

      <section className="pb-8">
        <AnimatedCard>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="border-0 p-0 m-0 mb-2">项目作品</h2>
              <p className="text-[#616161]">精选项目展示，点击查看更多详情</p>
            </div>
            <NavLink
              to="/projects"
              className="text-[#1976d2] px-3 py-1.5 rounded hover:bg-[#f5f5f5] active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              查看全部 →
            </NavLink>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatedCard delay={100}>
            <UniversalLink
              to="https://chatglm.cn/main/gdetail/699ffb6840f493922fb9ae29"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-[#f0f0f0] rounded-lg overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-[#e0e0e0] hover:-translate-y-1 active:scale-[0.98] active:shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all duration-300 group"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="https://miaoda.feishu.cn/aily/api/v1/files/static/40f00703b14f47e5895ef568fa762475_ve_miaoda"
                  alt="人生陪伴教练"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-medium mb-2">人生陪伴教练</h3>
                <p className="text-sm text-[#424242] mb-3">通过深度对话帮助用户探索自我、理清人生方向、提供情感支持和成长建议的AI陪伴者。</p>
                <div className="space-y-2 text-xs text-[#616161]">
                  <p><span className="font-medium text-[#424242]">解决痛点：</span>现代人常面临孤独感、人生迷茫、情绪困扰却缺乏倾听者和专业引导。</p>
                  <p><span className="font-medium text-[#424242]">设计思路：</span>融合积极心理学和教练技术，采用非评判性倾听、启发式提问，让用户在对话中自我觉察、找到内在力量。</p>
                </div>
              </div>
            </UniversalLink>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <UniversalLink
              to="https://chatglm.cn/share/HF1hWEr1"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-[#f0f0f0] rounded-lg overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-[#e0e0e0] hover:-translate-y-1 active:scale-[0.98] active:shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all duration-300 group"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="https://miaoda.feishu.cn/aily/api/v1/files/static/fa92e4380fa943868dcce8f5e8e55a4c_ve_miaoda"
                  alt="商业模式教练"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-medium mb-2">商业模式教练</h3>
                <p className="text-sm text-[#424242] mb-3">帮助创业者和企业管理者梳理商业模式、分析市场机会、优化商业策略的专业AI顾问。</p>
                <div className="space-y-2 text-xs text-[#616161]">
                  <p><span className="font-medium text-[#424242]">解决痛点：</span>创业者常缺乏系统的商业思维框架，难以清晰表达价值主张和盈利模式。</p>
                  <p><span className="font-medium text-[#424242]">设计思路：</span>基于商业画布和价值主张设计方法论，通过结构化提问引导用户系统梳理商业逻辑。</p>
                </div>
              </div>
            </UniversalLink>
          </AnimatedCard>
        </div>
      </section>

      <section>
        <AnimatedCard>
          <h2>教育背景</h2>
        </AnimatedCard>

        <div className="space-y-6">
          <AnimatedCard delay={100}>
            <div className="bg-white p-6 border border-[#f0f0f0] rounded-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-[#e0e0e0] hover:-translate-y-1 active:scale-[0.98] active:shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="mb-0">马来亚大学</h3>
                <span className="text-sm text-[#616161]">2024.03 - 2025.08</span>
              </div>
              <p className="text-[#424242] mb-4">教育技术 硕士学位</p>
              <div className="pt-4 border-t border-[#f0f0f0]">
                <p className="text-sm text-[#616161] mb-2">主修课程：</p>
                <div className="flex flex-wrap gap-2">
                  {['教学设计', '教育人工智能', '数字化学习', '研究方法', '教育数据分析'].map((course) => (
                    <span key={course} className="text-xs bg-[#e3f2fd] text-[#1976d2] px-2.5 py-1 rounded-full">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <div className="bg-white p-6 border border-[#f0f0f0] rounded-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-[#e0e0e0] hover:-translate-y-1 active:scale-[0.98] active:shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="mb-0">上海师范大学</h3>
                <span className="text-sm text-[#616161]">2017.10 - 2021.07</span>
              </div>
              <p className="text-[#424242] mb-4">教育技术 学士学位</p>
              <div className="pt-4 border-t border-[#f0f0f0]">
                <p className="text-sm text-[#616161] mb-2">主修课程：</p>
                <div className="flex flex-wrap gap-2">
                  {['教育技术学导论', 'C程序设计', '学习科学', '教学系统设计', '远程教育', '教育媒体制作'].map((course) => (
                    <span key={course} className="text-xs bg-[#e3f2fd] text-[#1976d2] px-2.5 py-1 rounded-full">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <section>
        <AnimatedCard>
          <h2>核心专业能力</h2>
          <p className="text-[#616161] mb-8">
            结合教育理论与实践，在AI教育、课程设计、数字媒体等领域具备深厚专业素养
          </p>
        </AnimatedCard>

        <div className="space-y-6">
          {[
            {
              title: '课程研发与培训',
              desc: '具备完整的课程设计与培训体系搭建能力，从需求分析、内容开发到培训交付的全流程经验。',
              tags: ['课程体系设计', '教学材料开发', '培训运营', '效果评估']
            },
            {
              title: '用户洞察与需求分析',
              desc: '擅长用户深度访谈与数据分析，精准识别用户痛点，为产品优化和课程设计提供数据支撑。',
              tags: ['用户访谈', '问卷设计', '数据分析', 'A/B测试']
            },
            {
              title: 'AI教育应用',
              desc: '熟练运用各类AI工具进行教育内容开发和产品优化，包括聊天机器人训练与对话逻辑优化。',
              tags: ['AI课程设计', 'ChatGPT应用', '聊天机器人训练', 'AI工具集成']
            },
            {
              title: '数字化内容创作',
              desc: '熟练掌握多媒体内容制作工具，独立完成视频拍摄、剪辑和新媒体运营。',
              tags: ['视频制作', '新媒体运营', '直播技术', '多媒体设计']
            }
          ].map((item, index) => (
            <AnimatedCard key={item.title} delay={100 * (index + 1)}>
              <div className="bg-white p-6 border border-[#f0f0f0] rounded-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-[#e0e0e0] hover:-translate-y-1 active:scale-[0.98] active:shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all duration-300">
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-[#424242] mb-4">
                  {item.desc}
                </p>
                <ul className="flex flex-wrap gap-2.5">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="bg-[#f5f5f5] px-3 py-1.5 rounded-full text-sm text-[#424242] hover:bg-[#e8e8e8] transition-colors duration-200"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
