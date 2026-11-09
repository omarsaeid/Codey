import { stats } from '../../data/about';
import { useLang } from '../../i18n/LanguageContext';
import Stat from '../ui/Stat';

export default function StatsBar({ animated = true, style }: { animated?: boolean; style?: React.CSSProperties }) {
  const { tr } = useLang();
  return (
    <section className="stats" style={style}>
      {stats.map((s, i) => (
        <Stat
          key={s.id}
          text={tr(s.text)}
          n={'n' in s ? s.n : 0}
          suffix={'suffix' in s ? s.suffix : ''}
          label={'label' in s ? s.label : undefined}
          delay={Math.min(i, 3) as 0 | 1 | 2 | 3}
          animated={animated}
        />
      ))}
    </section>
  );
}
