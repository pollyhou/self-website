import { Sparkles, MessageSquare, Globe, Lightbulb, Heart, Mail, Phone } from 'lucide-react';
import { useScrollReveal } from '@client/src/hooks/useScrollReveal';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

const ContactPage = () => {
  const interests = [
    {
      icon: Lightbulb,
      title: 'AI 教育应用',
      desc: '探索人工智能如何赋能教育，让学习更高效、更有趣'
    },
    {
      icon: MessageSquare,
      title: '智能体设计',
      desc: '设计有温度、有洞察力的 AI 对话伙伴，陪伴用户成长'
    },
    {
      icon: Globe,
      title: '教育科技趋势',
      desc: '关注全球教育创新，融合国际视野与本土实践'
    },
    {
      icon: Heart,
      title: '终身学习',
      desc: '相信持续成长的力量，保持对新技术和新知识的好奇'
    }
  ];

  return (
    <div className="space-y-12">
      <AnimatedSection>
        <section>
          <h1 className="mb-4">关于我</h1>
          <div className="space-y-4 text-[#616161] leading-relaxed">
            <p>
              我叫侯小雯，来自河南高考大省，填报志愿时抱着想要通过科技促进教育平等的雄心壮志选择教育技术这个专业。这一探索就是八年，四年的本科教育让我看到了翻转课堂、在线教育各种教育形式；两年国际IB教育让我应用了最优质的教育理念；两年硕士求学中我也尝试了组建队伍、需求调研、产品设计再到最后的落地执行，设计出了帮助留学生提升公众演讲能力的工作坊。这一路来在AI的陪伴下，我更深入的理解到当年我想追求的教育平等，其实是想搭建出一套教育框架帮助每一个人在终身教育的过程中不断地了解自我、探索世界最终能够建立起个人终身学习系统从而实现自我迭代赋能。
            </p>
            <p>而于此同时，我发现Agent也进入到了自我进化的阶段，我感知到我身处在一个不断变化和充满机遇的时代里，规则在不断的改写和建立，产品和商业模式更新迭代速度飞起，这无不让我这个世界探索爱好者感到兴奋并想要尝试更多的可能性。如果你也有同样的感受，也欢迎你和我一起交流~</p>
          </div>
        </section>
      </AnimatedSection>

      <section>
        <AnimatedSection>
          <h2 className="mb-6">我感兴趣的事</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {interests.map((item, index) => (
            <AnimatedSection key={item.title} delay={100 * (index + 1)}>
              <div className="bg-white p-6 border border-[#f0f0f0] rounded-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-[#e0e0e0] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#f5f5f5] group-hover:bg-[#e3f2fd] transition-colors mb-4">
                  <item.icon className="w-6 h-6 text-[#1976d2]" />
                </div>
                <h3 className="text-base font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-[#616161]">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <AnimatedSection delay={500}>
        <section className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-8 rounded-2xl text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white mx-auto mb-4 shadow-sm">
            <Sparkles className="w-8 h-8 text-[#1976d2]" />
          </div>
          <h3 className="text-xl font-semibold mb-3">欢迎随时交流</h3>
          <p className="text-[#616161] mb-6 max-w-lg mx-auto leading-relaxed">
            如果你对教育科技、AI 应用，或者任何有趣的话题有想法，欢迎随时联系我。
            我很乐意与志同道合的朋友一起探讨、学习、成长。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <UniversalLink
              to="mailto:Pollyhou123@gmail.com"
              className="inline-flex items-center gap-2 bg-[#1976d2] text-white px-6 py-3 rounded-lg hover:bg-[#1565c0] hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Pollyhou123@gmail.com
            </UniversalLink>
            <UniversalLink
              to="tel:19916948172"
              className="inline-flex items-center gap-2 bg-white text-[#424242] px-6 py-3 rounded-lg border border-[#e0e0e0] hover:bg-[#f5f5f5] hover:border-[#d0d0d0] active:scale-95 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              19916948172
            </UniversalLink>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;
