import { Calendar, User, ExternalLink, FolderOpen, Briefcase } from 'lucide-react';
import { useScrollReveal } from '@client/src/hooks/useScrollReveal';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';

interface PortfolioItem {
  id: string;
  name: string;
  period: string;
  role: string;
  description: string;
  achievements: string[];
  link: string;
}

interface ProjectExperience {
  id: string;
  name: string;
  period: string;
  role: string;
  description: string;
  achievements: string[];
}

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

const portfolioItems: PortfolioItem[] = [
  {
    id: 'agent-1',
    name: '人生陪伴教练',
    period: '2025',
    role: 'AI智能体开发',
    description:
      '一个温暖友好的AI人生陪伴教练，通过深度对话帮助用户探索自我、理清人生方向、提供情感支持和成长建议。采用积极心理学和教练技术，陪伴用户度过人生重要时刻。',
    achievements: [
      '基于ChatGLM平台开发',
      '融合积极心理学对话技巧',
      '支持多轮深度对话',
      '个性化成长建议',
    ],
    link: 'https://chatglm.cn/main/gdetail/699ffb6840f493922fb9ae29',
  },
  {
    id: 'agent-2',
    name: '商业模式教练',
    period: '2025',
    role: 'AI智能体开发',
    description:
      '专业的商业分析AI智能体，帮助创业者和企业管理者梳理商业模式、分析市场机会、优化商业策略。基于商业画布和价值主张设计方法论，提供结构化的商业诊断和建议。',
    achievements: [
      '基于ChatGLM平台开发',
      '商业画布分析框架',
      '市场机会识别',
      '商业模式优化建议',
    ],
    link: 'https://chatglm.cn/share/HF1hWEr1',
  },
];

const projectExperiences: ProjectExperience[] = [
  {
    id: '1',
    name: 'Xpert教育领域专家项目',
    period: '2025.11 - 至今',
    role: '教育任务设计师',
    description:
      '参与AI教育平台内容生态建设，设计高质量教育任务训练和评估AI模型的教育领域能力。基于平台教学目标与质量标准，独立设计创建教育评估任务，精准匹配不同用户群体的学习需求。',
    achievements: [
      '独立设计创建20+个教育评估任务',
      '为每个任务制定详细评分量规与多维评价体系',
      '构建任务标准答案示例，持续提升任务质量与有效性',
      '参与多轮模型生成结果对比分析',
    ],
  },
  {
    id: '2',
    name: '中美韦伯商业计划大赛',
    period: '2019.03 - 2019.06',
    role: '项目核心成员',
    description:
      '针对大学生心理健康问题求助率低的现状，开发便捷心理咨询APP项目，完成竞品分析报告，明确产品核心功能与市场定位。主导完成APP的UI交互原型设计，协助开发团队进行功能实现。',
    achievements: [
      '完成竞品分析报告，明确产品核心功能与市场定位',
      '主导完成APP的UI交互原型设计',
      '协助开发团队进行功能实现',
      '项目荣获大赛决赛二等奖，获得2000美元种子基金',
    ],
  },
  {
    id: '3',
    name: '北辰青年 Yes Go行动',
    period: '2022.09',
    role: '活动执行',
    description:
      '全程参与线下行动营活动落地执行，担任活动NPC角色，通过引导式游戏互动，带领参与者破冰与深度体验，提升活动氛围与用户参与感。负责活动前期物料准备与现场布置。',
    achievements: [
      '担任活动NPC角色，带领参与者破冰与深度体验',
      '负责活动前期物料准备与现场布置',
      '独立完成活动会议视频的拍摄与剪辑',
      '制作活动回顾视频用于社群二次传播与案例沉淀',
    ],
  },
];

const ProjectsPage = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: portfolioRef, isVisible: portfolioVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div className="space-y-10">
      <section
        ref={headerRef}
        className={`transition-all duration-700 ease-out ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h1 className="mb-4">项目列表</h1>
        <p className="text-[#616161]">
          作品集与项目经历，展示可交付成果与参与的重要项目
        </p>
      </section>

      <section>
        <div
          ref={portfolioRef}
          className={`mb-6 transition-all duration-700 ease-out ${
            portfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <FolderOpen className="w-5 h-5 text-[#1976d2]" />
            <h2>作品集</h2>
          </div>
          <p className="text-sm text-[#616161]">可实际体验的作品，点击即可访问</p>
        </div>

        <div className="space-y-4">
          {portfolioItems.map((item, index) => (
            <AnimatedCard key={item.id} delay={100 * (index + 1)}>
              <UniversalLink
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-[#f0f0f0] rounded-lg p-4 sm:p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-[#e0e0e0] hover:-translate-y-1 active:scale-[0.98] active:shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-2 text-base sm:text-lg">{item.name}</h3>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-[#616161] mb-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        {item.role}
                      </span>
                    </div>
                    <p className="text-[#424242] text-xs sm:text-sm mb-3 leading-relaxed">{item.description}</p>
                    <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="bg-[#e3f2fd] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs text-[#1976d2] hover:bg-[#bbdefb] transition-colors duration-200"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-[#1976d2] shrink-0 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </UniversalLink>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section>
        <div
          ref={experienceRef}
          className={`mb-6 transition-all duration-700 ease-out ${
            experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-[#1976d2]" />
            <h2>项目经历</h2>
          </div>
          <p className="text-sm text-[#616161]">参与的重要项目与实践经验</p>
        </div>

        <div className="space-y-4">
          {projectExperiences.map((project, index) => (
            <AnimatedCard key={project.id} delay={100 * (index + 1)}>
              <div
                className="bg-white border border-[#f0f0f0] rounded-lg p-4 sm:p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-[#e0e0e0] hover:-translate-y-1 active:scale-[0.98] active:shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <h3 className="mb-2 text-base sm:text-lg">{project.name}</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-[#616161] mb-3">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {project.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {project.role}
                  </span>
                </div>
                <p className="text-[#424242] text-xs sm:text-sm mb-3 leading-relaxed">{project.description}</p>
                <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="bg-[#f5f5f5] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs text-[#424242] hover:bg-[#e8e8e8] transition-colors duration-200"
                    >
                      {achievement}
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

export default ProjectsPage;
