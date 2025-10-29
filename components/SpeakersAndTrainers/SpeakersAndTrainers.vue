<script setup lang="ts">
interface Speaker {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
}

const speakers: Speaker[] = [
  {
    id: 'john-bercow',
    name: 'John Bercow MP',
    title: 'Former Speaker of the House of Commons',
    image: '/images/Speakers/placeholder-speaker-1.jpg',
    bio: 'John Bercow served as Speaker of the House of Commons from 2009 to 2019, presiding over some of the most significant parliamentary debates in recent British history. With over two decades of parliamentary experience, he has developed an unparalleled understanding of legislative procedure, parliamentary protocol, and constitutional matters. His tenure as Speaker was marked by his commitment to backbench rights and parliamentary sovereignty. John brings extensive expertise in public speaking, debate management, and the intricacies of Westminster parliamentary procedure to his training sessions.'
  },
  {
    id: 'sir-george-young',
    name: 'Sir George Young MP',
    title: 'Former Chief Whip of the Government',
    image: '/images/Speakers/placeholder-speaker-2.jpg',
    bio: 'Sir George Young served as Chief Whip of the Government, overseeing parliamentary business and party discipline during crucial legislative periods. His extensive career in Parliament spans multiple ministerial roles and gives him deep insight into government operations, parliamentary strategy, and legislative management. He specializes in training on parliamentary procedures, government whipping systems, and the art of political negotiation within Westminster.'
  },
  {
    id: 'michael-portillo',
    name: 'Michael Portillo',
    title: 'Former Cabinet Minister and Broadcaster',
    image: '/images/Speakers/placeholder-speaker-3.jpg',
    bio: 'Michael Portillo served as a Cabinet Minister in the 1990s, holding positions including Secretary of State for Defence and Secretary of State for Employment. His career combines high-level government experience with extensive broadcasting and media work. Michael brings unique perspectives on political communication, media relations, cabinet-level decision making, and the intersection of politics and public life. He is particularly skilled at helping civil servants understand ministerial perspectives and priorities.'
  },
  {
    id: 'rt-hon-john-bercow-pc-ma',
    name: 'Rt Hon John Bercow PC MA',
    title: 'Former Speaker of the House of Commons',
    image: '/images/Speakers/placeholder-speaker-4.jpg',
    bio: 'With distinguished service as Speaker of the House of Commons and membership of the Privy Council, John Bercow PC MA brings academic rigor combined with practical parliamentary experience. His training sessions focus on constitutional matters, the role of the Speaker, parliamentary reform, and the evolution of democratic institutions. He has been at the forefront of modernizing parliamentary procedures and championing the rights of parliamentarians.'
  },
  {
    id: 'dr-hon-lord-mcinally',
    name: 'Dr Hon Lord McInally',
    title: 'Chairman of Specialist Training Provider',
    image: '/images/Speakers/placeholder-speaker-1.jpg',
    bio: 'Lord McInally combines his role in the House of Lords with chairmanship of specialist training organizations. His expertise spans public policy, governance structures, and the development of training programs for senior public servants. He has worked extensively with government departments and arm\'s length bodies to improve leadership capacity and organizational effectiveness in the public sector.'
  },
  {
    id: 'dame-rosie-mp',
    name: 'Dame Rosie MP',
    title: 'Parliamentary Under Secretary',
    image: '/images/Speakers/placeholder-speaker-2.jpg',
    bio: 'Dame Rosie serves as a Parliamentary Under Secretary, bringing current ministerial experience to her training work. Her insights into contemporary government operations, policy development, and the relationship between ministers and civil servants are invaluable. She specializes in training on ministerial accountability, parliamentary questions, and the practical workings of government departments.'
  },
  {
    id: 'cherry-gibbs-mp',
    name: 'Cherry Gibbs MP',
    title: 'Former Minister of State',
    image: '/images/Speakers/placeholder-speaker-3.jpg',
    bio: 'As a former Minister of State, Cherry Gibbs has extensive experience in policy implementation and departmental management. Her ministerial career focused on transforming public services and improving government efficiency. She provides training on ministerial decision-making processes, stakeholder management, and effective policy delivery in complex government environments.'
  },
  {
    id: 'lord-tyler',
    name: 'Lord Tyler',
    title: 'Member of House of Lords',
    image: '/images/Speakers/placeholder-speaker-4.jpg',
    bio: 'Lord Tyler brings his experience as a member of the House of Lords, offering unique insights into the upper chamber\'s role in the legislative process. His expertise includes constitutional reform, the revising function of the Lords, and the relationship between the two Houses of Parliament. He is particularly knowledgeable about parliamentary scrutiny and the legislative process.'
  },
  {
    id: 'rt-hon-dr-james-nairn',
    name: 'Rt Hon Dr James Nairn',
    title: 'Former Parliamentary Secretary',
    image: '/images/Speakers/placeholder-speaker-1.jpg',
    bio: 'Dr James Nairn combines academic credentials with practical parliamentary experience as a former Parliamentary Secretary. His doctoral research in political science informs his teaching on parliamentary governance, ministerial accountability, and the civil service-minister relationship. He provides evidence-based training on constitutional matters and parliamentary procedures.'
  },
  {
    id: 'kate-hoey-mp',
    name: 'Kate Hoey MP',
    title: 'Former Minister for Sport',
    image: '/images/Speakers/placeholder-speaker-2.jpg',
    bio: 'Kate Hoey served as Minister for Sport and has extensive experience in both constituency work and ministerial responsibilities. Her training sessions draw on real-world examples from her ministerial career, focusing on policy implementation, stakeholder engagement, and the management of high-profile portfolios. She is particularly effective at explaining how ministers balance political and administrative demands.'
  },
  {
    id: 'baronier-oliver',
    name: 'Baronier Oliver',
    title: 'Senior Policy Advisor',
    image: '/images/Speakers/placeholder-speaker-3.jpg',
    bio: 'Baronier Oliver has served as a senior policy advisor to multiple government departments, specializing in strategic policy development and cross-governmental initiatives. With deep understanding of the policy-making process, Oliver provides training on policy analysis, evidence-based decision making, and effective policy communication across government.'
  },
  {
    id: 'prof-lord-lorner-obe-fa',
    name: 'Prof Lord Lorner OBE FA',
    title: 'Professor of Public Policy',
    image: '/images/Speakers/placeholder-speaker-4.jpg',
    bio: 'Professor Lord Lorner combines an academic career in public policy with membership of the House of Lords. As a Fellow of the Academy and OBE recipient, his expertise spans theoretical frameworks and practical application of public policy. His training covers policy analysis, evaluation methodologies, and the relationship between academic research and policy development.'
  },
  {
    id: 'dr-stephen-wall-gcmg-lvo',
    name: 'Dr Stephen Wall, GCMG, LVO',
    title: 'Former UK Permanent Representative to the EU',
    image: '/images/Speakers/placeholder-speaker-1.jpg',
    bio: 'Dr Stephen Wall served as the UK Permanent Representative to the European Union, representing British interests at the highest level of European diplomacy. His distinguished career in the Foreign Office included roles as EU Advisor to the Prime Minister. He provides unparalleled insights into international negotiations, diplomatic protocol, European institutions, and the conduct of UK foreign policy.'
  },
  {
    id: 'martin-baxter',
    name: 'Martin Baxter',
    title: 'Parliamentary Affairs Consultant',
    image: '/images/Speakers/placeholder-speaker-2.jpg',
    bio: 'Martin Baxter specializes in parliamentary affairs consultancy, advising organizations on engagement with Parliament and parliamentary processes. His expertise includes parliamentary lobbying, select committee work, and understanding parliamentary procedures from an external stakeholder perspective. He trains civil servants on effective parliamentary liaison and stakeholder management.'
  },
  {
    id: 'peter-brand',
    name: 'Peter Brand',
    title: 'Public Administration Expert',
    image: '/images/Speakers/placeholder-speaker-3.jpg',
    bio: 'Peter Brand is a recognized expert in public administration with decades of experience in civil service management and organizational development. His work focuses on administrative reform, efficiency in government operations, and best practices in public sector management. He provides training on organizational effectiveness, change management, and modern public administration principles.'
  },
  {
    id: 'lance-price',
    name: 'Lance Price',
    title: 'Political Communications Specialist',
    image: '/images/Speakers/placeholder-speaker-4.jpg',
    bio: 'Lance Price has extensive experience in political communications, having worked in senior communications roles in government. He specializes in media strategy, crisis communications, and the management of government messaging. His training covers effective communication strategies, media handling, and the relationship between government communications and policy objectives.'
  },
  {
    id: 'nick-smith',
    name: 'Nick Smith',
    title: 'Parliamentary Procedures Expert',
    image: '/images/Speakers/placeholder-speaker-1.jpg',
    bio: 'Nick Smith has dedicated his career to understanding and teaching parliamentary procedures. With years of experience working within Parliament, he has comprehensive knowledge of standing orders, precedents, and the practical application of parliamentary rules. His training sessions provide detailed instruction on legislative processes, committee procedures, and parliamentary conventions.'
  },
  {
    id: 'dr-martyn-dixon',
    name: 'Dr Martyn Dixon',
    title: 'Governance and Policy Specialist',
    image: '/images/Speakers/placeholder-speaker-2.jpg',
    bio: 'Dr Martyn Dixon specializes in governance structures and policy development across the public sector. His doctoral research examined governance mechanisms in complex organizations. He provides training on corporate governance in the public sector, accountability frameworks, and the development of effective policy governance structures.'
  },
  {
    id: 'jonathan-diamond',
    name: 'Jonathan Diamond',
    title: 'Leadership Development Trainer',
    image: '/images/Speakers/placeholder-speaker-3.jpg',
    bio: 'Jonathan Diamond specializes in leadership development for senior public servants. With a background in organizational psychology and extensive experience in the civil service, he designs and delivers training programs on leadership skills, strategic thinking, and organizational change. His approach combines theoretical frameworks with practical application tailored to the public sector context.'
  },
  {
    id: 'tony-laycock-bt-msc-rn-rtd',
    name: 'Tony Laycock Bt MSc. RN (Rtd)',
    title: 'Defence and Security Consultant',
    image: '/images/Speakers/placeholder-speaker-4.jpg',
    bio: 'Rear Admiral Tony Laycock brings his distinguished Royal Navy career and defence expertise to training civil servants working in security and defence sectors. His military background combined with understanding of civil-military relations provides unique insights into defence policy, security protocols, and the interface between military and civilian government structures.'
  },
  {
    id: 'nicholas-comfort',
    name: 'Nicholas Comfort',
    title: 'Civil Service Trainer',
    image: '/images/Speakers/placeholder-speaker-1.jpg',
    bio: 'Nicholas Comfort has spent his career developing and delivering training programs specifically designed for civil servants. His expertise covers core civil service competencies, ethical standards, and professional development. He has worked across multiple government departments, giving him broad understanding of different departmental cultures and training needs.'
  },
  {
    id: 'juman-saadi-qc',
    name: 'Juman Saadi QC',
    title: 'Constitutional Law Expert',
    image: '/images/Speakers/placeholder-speaker-2.jpg',
    bio: 'Juman Saadi QC is a leading barrister specializing in constitutional and administrative law. With extensive experience appearing before the highest courts, including constitutional cases involving government powers and judicial review, Saadi provides authoritative training on constitutional principles, legal frameworks governing public administration, and the rule of law in democratic governance.'
  },
  {
    id: 'terry-smith',
    name: 'Terry Smith',
    title: 'Public Sector Training Specialist',
    image: '/images/Speakers/placeholder-speaker-3.jpg',
    bio: 'Terry Smith specializes in designing and delivering training programs across the public sector. With experience in both central and local government, Smith understands the diverse training needs of public servants at all levels. Training areas include project management, stakeholder engagement, and service delivery improvement in public sector contexts.'
  },
  {
    id: 'paul-richards',
    name: 'Paul Richards',
    title: 'Policy and Strategy Advisor',
    image: '/images/Speakers/placeholder-speaker-4.jpg',
    bio: 'Paul Richards has advised government on policy and strategy development across multiple policy areas. His expertise includes strategic planning, policy analysis, and the translation of political priorities into deliverable policy programs. He provides training on strategic thinking, policy development cycles, and effective implementation strategies.'
  },
  {
    id: 'alexandros-de-parto-fragkatakis',
    name: 'Alexandros De Parto Fragkatakis',
    title: 'International Relations Expert',
    image: '/images/Speakers/placeholder-speaker-1.jpg',
    bio: 'Alexandros De Parto Fragkatakis brings international perspective to government training, with expertise in international relations, diplomatic protocol, and cross-cultural communication. His work spans multiple international organizations and provides civil servants with understanding of global governance, international negotiations, and the UK\'s role in international affairs.'
  },
  {
    id: 'jennifer-bradley-mp',
    name: 'Jennifer Bradley MP',
    title: 'Parliamentary Affairs Expert',
    image: '/images/Speakers/placeholder-speaker-2.jpg',
    bio: 'Jennifer Bradley MP combines active parliamentary service with expertise in parliamentary affairs. Her training draws on current parliamentary experience, covering topics including parliamentary questions, debates, committee work, and the relationship between MPs and constituents. She provides practical insights into how Parliament works from an insider perspective.'
  },
  {
    id: 'matthew-wher-of-walles-qc',
    name: 'Matthew Wher of Walles (QC)',
    title: 'Legal Affairs Consultant',
    image: '/images/Speakers/placeholder-speaker-3.jpg',
    bio: 'Matthew Wher QC specializes in legal affairs consultancy for government departments and public bodies. His practice focuses on administrative law, government legal frameworks, and regulatory compliance. He provides training on legal responsibilities of public servants, navigating legal constraints in policy implementation, and understanding judicial review processes.'
  },
  {
    id: 'ibrahim-hozen',
    name: 'Ibrahim Hozen',
    title: 'Organizational Development Expert',
    image: '/images/Speakers/placeholder-speaker-4.jpg',
    bio: 'Ibrahim Hozen specializes in organizational development within public sector contexts. His work focuses on organizational change, culture transformation, and building high-performing teams in government departments. He brings evidence-based approaches to organizational effectiveness, change management, and developing adaptive organizations capable of meeting evolving public service challenges.'
  },
  {
    id: 'rosanne-harris-ba-motheracraft',
    name: 'Rosanne Harris BA Motheracraft',
    title: 'Public Service Training Expert',
    image: '/images/Speakers/placeholder-speaker-1.jpg',
    bio: 'Rosanne Harris brings unique expertise in training design and delivery for public services. Her background combines educational theory with practical training experience across government departments. She specializes in developing accessible, engaging training programs that meet the specific needs of diverse civil service audiences, with particular focus on inclusive learning approaches.'
  },
  {
    id: 'tony-smith',
    name: 'Tony Smith',
    title: 'Senior Government Trainer',
    image: '/images/Speakers/placeholder-speaker-2.jpg',
    bio: 'Tony Smith is a senior trainer with decades of experience delivering programs to government personnel at all levels. His training expertise spans leadership development, management skills, and professional development for civil servants. He has designed and delivered training programs for multiple government departments and has deep understanding of civil service learning and development needs.'
  }
];

const navigateToSpeaker = (speakerId: string) => {
  navigateTo(`/speakers-and-trainers/${speakerId}`);
};
</script>

<template>
  <section class="py-16 px-4 lg:px-24 bg-background">
    <div class="max-w-6xl mx-auto mb-12">
      <p class="text-center text-lg leading-relaxed text-foreground/80">
        All our courses are led by highly experienced trainers that have a track record of delivering training to the very
        highest standard. Each trainer that works with us also has personal experience of working at the highest level of
        either Parliament, Government or the Civil Service, enabling them to give a genuine insight into the course
        subject matter. As well as our trainers, we have a wide range of other speakers that include senior
        Parliamentarians, Parliamentary Clerks, Civil Servants and Academics.
      </p>
    </div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="speaker in speakers"
        :key="speaker.id"
        class="bg-white border rounded-lg hover:shadow-lg cursor-pointer transition-all"
        @click="navigateToSpeaker(speaker.id)"
      >
        <div class="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
          <img
            :src="speaker.image"
            :alt="speaker.name"
            class="w-full h-full object-cover"
            @error="(e) => (e.target as HTMLImageElement).style.display = 'none'"
          />
        </div>
        <div class="p-4 text-center">
          <h3 class="font-semibold text-gray-700 text-lg mb-2">{{ speaker.name }}</h3>
          <p class="text-sm text-gray-500">{{ speaker.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
