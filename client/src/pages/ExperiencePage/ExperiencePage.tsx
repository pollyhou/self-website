import { Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@client/src/hooks/useScrollReveal';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ delay });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {children}
    </div>
  );
}

const experiences: Experience[] = [
  {
    id: '1',
    company: '艾麦国际物流公司',
    role: '系统培训师',
    period: '2025.10 - 至今',
    location: '',
    description: '负责企业核心业务系统的培训体系搭建与运营，通过标准化培训方案提升员工系统操作能力。',
    achievements: [
      '协同业务、产品及技术部门，通过15+场次需求访谈与流程分析，设计3套核心业务系统标准化培训方案',
      '开发可视化操作手册、互动式视频教程等多元化教学材料，使新员工系统上手时间平均缩短40%',
      '独立负责课程宣发、学员组织到课后测试全流程运营，推动关键课程通过率从75%提升至92%'
    ],
    skills: ['培训体系设计', '课程开发', '视频制作', '项目管理']
  },
  {
    id: '2',
    company: 'Thriving Talents',
    role: '研发岗实习生',
    period: '2024.06 - 至今',
    location: '吉隆坡',
    description: '参与AI教育产品研发，负责聊天机器人训练与公众演讲工作坊设计，深度参与用户研究与产品迭代。',
    achievements: [
      '为帮助客户训练逻辑批判能力，在MindStudio平台制作并训练聊天机器人，使用Airtable储存聊天数据',
      '通过多个生成式AI平台的对比和训练，优化了聊天机器人的各个功能与机制',
      '负责研发设计公众演讲工作坊，通过分析用户调研信息设定教学大纲，制定工作坊活动计划',
      '设计具体活动细节，设计工作坊所需幻灯片以及工作表',
      '参与用户访谈，充分了解用户需求以及对活动设计的反馈，复盘并完善工作坊具体内容设计'
    ],
    skills: ['AI训练', '用户研究', '课程设计', '数据分析']
  },
  {
    id: '3',
    company: '上海青浦世界外国语学校',
    role: 'ICT协调员',
    period: '2021.09 - 2023.07',
    location: '上海',
    description: '负责学校信息技术课程设计与实施，统筹校园媒体运营与大型活动策划，推动学校获得IB PYP授权。',
    achievements: [
      '独立设计学生信息技术课程以及基础编程社团课程并通过了IB（国际文凭）的审核，就职期间学校获得国际文凭组织PYP的授权',
      '实施并评估完善课程内容，课程深受学生喜爱',
      '负责运营学校的公众媒体账号宣传以及官方网站的后台维护',
      '设计组织并参与每月一次的校园集会（太空节、艺术节、中秋节等）以及各类大型活动（运动会、毕业典礼、入团仪式等）',
      '参与策划筹备实施，独立完成现场的媒体拍摄与直播以及后期视频剪辑与媒体发布'
    ],
    skills: ['IB课程', '媒体运营', '活动策划', '视频制作']
  },
  {
    id: '4',
    company: '商汤科技公司',
    role: '人工智能课程研发实习生',
    period: '2019.11 - 2020.09',
    location: '上海',
    description: '参与人工智能基础课程研发，完成资源调研与教材分析，设计教学大纲与教学材料。',
    achievements: [
      '收集并整理人工智能相关信息以及课程，分析人工智能基础（大学版）教材，完成资源汇总报告',
      '参与研发人工智能课程，通过资源汇总整理列出大纲，并设计教学目标最后完成教学材料的制作'
    ],
    skills: ['课程研发', 'AI教育', '内容策划']
  }
];

const ExperiencePage = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div className="space-y-8">
      <section
        ref={headerRef}
        className={`transition-all duration-700 ease-out ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h1 className="text-2xl font-semibold mb-2">工作经历</h1>
        <p className="text-[#616161]">
          累计4年教育科技与AI领域工作经验，涵盖课程研发、系统培训、智能体设计等多个方向
        </p>
      </section>

      <section className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-[#e0e0e0] hidden md:block" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <AnimatedCard key={exp.id} delay={100 * (index + 1)}>
              <div className="relative md:pl-16">
                <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 items-center justify-center rounded-full bg-[#f5f5f5] border-2 border-white shadow-sm z-10">
                  <Briefcase className="w-5 h-5 text-[#1976d2]" />
                </div>

                <div className="bg-white p-5 sm:p-6 border border-[#f0f0f0] rounded-xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-[#e0e0e0] hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#212121] mb-1">{exp.company}</h3>
                      <p className="text-[#1976d2] font-medium">{exp.role}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#616161]">
                      <span className="inline-flex items-center gap-1.5 bg-[#f5f5f5] px-2.5 py-1 rounded-full">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1.5 bg-[#f5f5f5] px-2.5 py-1 rounded-full">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-[#616161] text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2.5 mb-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#424242]">
                        <span className="text-[#1976d2] mt-1.5">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#f0f0f0]">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-[#e3f2fd] text-[#1976d2] px-3 py-1 rounded-full hover:bg-[#bbdefb] transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <AnimatedCard delay={600}>
        <section className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-6 rounded-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">对我的经历感兴趣？</h3>
              <p className="text-sm text-[#616161]">欢迎了解更多关于我的信息</p>
            </div>
            <UniversalLink
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#1976d2] text-white px-5 py-2.5 rounded-lg hover:bg-[#1565c0] hover:shadow-lg active:scale-95 transition-all duration-200 text-sm font-medium"
            >
              关于我
              <ArrowRight className="w-4 h-4" />
            </UniversalLink>
          </div>
        </section>
      </AnimatedCard>
    </div>
  );
};

export default ExperiencePage;
