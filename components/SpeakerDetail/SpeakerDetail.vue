<script setup lang="ts">
interface Props {
  speakerId: string;
}

const props = defineProps<Props>();

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
    image: '/images/Speakers/john-bercow.jpg',
    bio: 'John Bercow served as Speaker of the House of Commons from 2009 to 2019, presiding over some of the most significant parliamentary debates in recent British history. With over two decades of parliamentary experience, he has developed an unparalleled understanding of legislative procedure, parliamentary protocol, and constitutional matters. His tenure as Speaker was marked by his commitment to backbench rights and parliamentary sovereignty. John brings extensive expertise in public speaking, debate management, and the intricacies of Westminster parliamentary procedure to his training sessions.'
  },
  {
    id: 'michael-portillo',
    name: 'Michael Portillo',
    title: 'Former Cabinet Minister and Broadcaster',
    image: '/images/Speakers/michael-portillo.jpg',
    bio: 'Michael Portillo served as a Cabinet Minister in the 1990s, holding positions including Secretary of State for Defence and Secretary of State for Employment. His career combines high-level government experience with extensive broadcasting and media work. Michael brings unique perspectives on political communication, media relations, cabinet-level decision making, and the intersection of politics and public life. He is particularly skilled at helping civil servants understand ministerial perspectives and priorities.'
  },
  {
    id: 'lord-mcnally',
    name: 'Lord McNally',
    title: 'Chairman of Specialist Training Provider',
    image: '/images/Speakers/lord_mcnally.jpeg',
    bio: 'Lord McNally combines his role in the House of Lords with chairmanship of specialist training organizations. His expertise spans public policy, governance structures, and the development of training programs for senior public servants. He has worked extensively with government departments and arm\'s length bodies to improve leadership capacity and organizational effectiveness in the public sector.'
  },
  {
    id: 'baroness-harris',
    name: 'Baroness Harris',
    title: 'Member of House of Lords',
    image: '/images/Speakers/baroness-hariss.jpg',
    bio: 'Baroness Harris brings her experience as a member of the House of Lords, offering unique insights into the upper chamber\'s role in the legislative process. Her expertise includes constitutional reform, the revising function of the Lords, and the relationship between the two Houses of Parliament.'
  },
  {
    id: 'cheryl-gillan',
    name: 'Cheryl Gillan MP',
    title: 'Former Minister of State',
    image: '/images/Speakers/cheryl-gillan1.jpg',
    bio: 'As a former Minister of State, Cheryl Gillan has extensive experience in policy implementation and departmental management. Her ministerial career focused on transforming public services and improving government efficiency. She provides training on ministerial decision-making processes, stakeholder management, and effective policy delivery in complex government environments.'
  },
  {
    id: 'lord-tyler',
    name: 'Lord Tyler',
    title: 'Member of House of Lords',
    image: '/images/Speakers/lord-tyler.jpg',
    bio: 'Lord Tyler brings his experience as a member of the House of Lords, offering unique insights into the upper chamber\'s role in the legislative process. His expertise includes constitutional reform, the revising function of the Lords, and the relationship between the two Houses of Parliament. He is particularly knowledgeable about parliamentary scrutiny and the legislative process.'
  },
  {
    id: 'kate-hoey-mp',
    name: 'Kate Hoey MP',
    title: 'Former Minister for Sport',
    image: '/images/Speakers/kate-hoey.jpg',
    bio: 'Kate Hoey served as Minister for Sport and has extensive experience in both constituency work and ministerial responsibilities. Her training sessions draw on real-world examples from her ministerial career, focusing on policy implementation, stakeholder engagement, and the management of high-profile portfolios. She is particularly effective at explaining how ministers balance political and administrative demands.'
  },
  {
    id: 'baroness-miller',
    name: 'Baroness Miller',
    title: 'Member of House of Lords',
    image: '/images/Speakers/baroness-miller.jpg',
    bio: 'Baroness Miller is a Member of the House of Lords with deep knowledge of parliamentary procedures and governance, bringing extensive experience in public policy and legislative scrutiny.'
  },
  {
    id: 'baroness-quin',
    name: 'Baroness Quin',
    title: 'Former Minister of State',
    image: '/images/Speakers/baroness-quin.jpg',
    bio: 'Baroness Quin served as Minister of State and has extensive parliamentary experience. She provides training on ministerial decision-making processes and effective policy delivery in complex government environments.'
  },
  {
    id: 'dr-stephen-wall-gcmg-lvo',
    name: 'Dr Stephen Wall, GCMG, LVO',
    title: 'Former UK Permanent Representative to the EU',
    image: '/images/Speakers/stephen-wall.jpg',
    bio: 'Dr Stephen Wall served as the UK Permanent Representative to the European Union, representing British interests at the highest level of European diplomacy. His distinguished career in the Foreign Office included roles as EU Advisor to the Prime Minister. He provides unparalleled insights into international negotiations, diplomatic protocol, European institutions, and the conduct of UK foreign policy.'
  },
  {
    id: 'martin-stanley',
    name: 'Martin Stanley',
    title: 'Public Administration Expert',
    image: '/images/Speakers/martin_stanley.jpeg',
    bio: 'Martin Stanley is a recognized expert in public administration with decades of experience in civil service management and organizational development. His work focuses on administrative reform, efficiency in government operations, and best practices in public sector management. He provides training on organizational effectiveness, change management, and modern public administration principles.'
  },
  {
    id: 'lance-price',
    name: 'Lance Price',
    title: 'Political Communications Specialist',
    image: '/images/Speakers/lance-price.jpg',
    bio: 'Lance Price has extensive experience in political communications, having worked in senior communications roles in government. He specializes in media strategy, crisis communications, and the management of government messaging. His training covers effective communication strategies, media handling, and the relationship between government communications and policy objectives.'
  },
  {
    id: 'nick-stuart',
    name: 'Nick Stuart',
    title: 'Parliamentary Procedures Expert',
    image: '/images/Speakers/Nick_Stuart.jpg',
    bio: 'Nick Stuart has dedicated his career to understanding and teaching parliamentary procedures. With years of experience working within Parliament, he has comprehensive knowledge of standing orders, precedents, and the practical application of parliamentary rules. His training sessions provide detailed instruction on legislative processes, committee procedures, and parliamentary conventions.'
  },
  {
    id: 'martyn-bond',
    name: 'Martyn Bond',
    title: 'Governance and Policy Specialist',
    image: '/images/Speakers/Martyn-Bond.jpg',
    bio: 'Martyn Bond specializes in governance structures and policy development across the public sector. His research examined governance mechanisms in complex organizations. He provides training on corporate governance in the public sector, accountability frameworks, and the development of effective policy governance structures.'
  },
  {
    id: 'jonathan-simcock',
    name: 'Jonathan Simcock',
    title: 'Leadership Development Trainer',
    image: '/images/Speakers/jonathan-simcock.jpg',
    bio: 'Jonathan Simcock specializes in leadership development for senior public servants. With a background in organizational psychology and extensive experience in the civil service, he designs and delivers training programs on leadership skills, strategic thinking, and organizational change. His approach combines theoretical frameworks with practical application tailored to the public sector context.'
  },
  {
    id: 'tony-lavender',
    name: 'Tony Lavender',
    title: 'Defence and Security Consultant',
    image: '/images/Speakers/tony-lavender.jpg',
    bio: 'Tony Lavender brings his distinguished career and defence expertise to training civil servants working in security and defence sectors. His background combined with understanding of civil-military relations provides unique insights into defence policy, security protocols, and the interface between military and civilian government structures.'
  },
  {
    id: 'nicholas-comfort',
    name: 'Nicholas Comfort',
    title: 'Civil Service Trainer',
    image: '/images/Speakers/nicholas-comfort.jpg',
    bio: 'Nicholas Comfort has spent his career developing and delivering training programs specifically designed for civil servants. His expertise covers core civil service competencies, ethical standards, and professional development. He has worked across multiple government departments, giving him broad understanding of different departmental cultures and training needs.'
  },
  {
    id: 'derek-hart',
    name: 'Derek Hart',
    title: 'Constitutional Law Expert',
    image: '/images/Speakers/derek-hart.jpg',
    bio: 'Derek Hart is a leading expert specializing in constitutional and administrative law. With extensive experience in constitutional cases involving government powers and judicial review, Hart provides authoritative training on constitutional principles, legal frameworks governing public administration, and the rule of law in democratic governance.'
  },
  {
    id: 'rob-smith',
    name: 'Rob Smith',
    title: 'Public Sector Training Specialist',
    image: '/images/Speakers/rob_smith.jpg',
    bio: 'Rob Smith specializes in designing and delivering training programs across the public sector. With experience in both central and local government, Smith understands the diverse training needs of public servants at all levels. Training areas include project management, stakeholder engagement, and service delivery improvement in public sector contexts.'
  },
  {
    id: 'paul-richards',
    name: 'Paul Richards',
    title: 'Policy and Strategy Advisor',
    image: '/images/Speakers/paul-richards.jpg',
    bio: 'Paul Richards has advised government on policy and strategy development across multiple policy areas. His expertise includes strategic planning, policy analysis, and the translation of political priorities into deliverable policy programs. He provides training on strategic thinking, policy development cycles, and effective implementation strategies.'
  },
  {
    id: 'anastasia-de-waal',
    name: 'Anastasia De Waal',
    title: 'International Relations Expert',
    image: '/images/Speakers/Anastasia-De-Waal.png',
    bio: 'Anastasia De Waal brings international perspective to government training, with expertise in international relations, diplomatic protocol, and cross-cultural communication. Her work spans multiple international organizations and provides civil servants with understanding of global governance, international negotiations, and international affairs.'
  },
  {
    id: 'anette-braun',
    name: 'Anette Braun',
    title: 'Parliamentary Affairs Expert',
    image: '/images/Speakers/anette-braun.jpg',
    bio: 'Anette Braun combines expertise in parliamentary affairs. Her training draws on extensive parliamentary experience, covering topics including parliamentary questions, debates, committee work. She provides practical insights into how Parliament works from an insider perspective.'
  },
  {
    id: 'julian-wood',
    name: 'Julian Wood',
    title: 'Legal Affairs Consultant',
    image: '/images/Speakers/julian-wood.jpg',
    bio: 'Julian Wood specializes in legal affairs consultancy for government departments and public bodies. His practice focuses on administrative law, government legal frameworks, and regulatory compliance. He provides training on legal responsibilities of public servants, navigating legal constraints in policy implementation, and understanding judicial review processes.'
  },
  {
    id: 'ibrahim-hasan',
    name: 'Ibrahim Hasan',
    title: 'Organizational Development Expert',
    image: '/images/Speakers/ibrahim-hasan.jpg',
    bio: 'Ibrahim Hasan specializes in organizational development within public sector contexts. His work focuses on organizational change, culture transformation, and building high-performing teams in government departments. He brings evidence-based approaches to organizational effectiveness, change management, and developing adaptive organizations capable of meeting evolving public service challenges.'
  },
  {
    id: 'lord-lisvane',
    name: 'Lord Lisvane',
    title: 'Former Clerk of the House of Commons',
    image: '/images/Speakers/lord_lisvane.jpg',
    bio: 'Lord Lisvane brings unique expertise from his role as Former Clerk of the House of Commons. His deep understanding of parliamentary procedure and constitutional matters provides invaluable insights for public servants working with Parliament.'
  },
  {
    id: 'peter-riddell',
    name: 'Peter Riddell',
    title: 'Political Commentator and Academic',
    image: '/images/Speakers/Peter_Riddell.jpg',
    bio: 'Peter Riddell is a distinguished political commentator and academic with extensive experience in analyzing government and parliamentary affairs. He provides expert training on political analysis and public policy.'
  },
  {
    id: 'robert-evans',
    name: 'Robert Evans',
    title: 'Former MEP',
    image: '/images/Speakers/robert-evan.jpg',
    bio: 'Robert Evans served as a Member of the European Parliament, bringing extensive experience in European affairs and international policy. He provides training on European institutions and international relations.'
  },
  {
    id: 'rt-hon-john-battle-mp',
    name: 'Rt Hon John Battle MP',
    title: 'Former Parliamentary Secretary',
    image: '/images/Speakers/rt-hon-john-battle-mp.jpg',
    bio: 'Rt Hon John Battle MP combines parliamentary experience as a former Parliamentary Secretary. He provides evidence-based training on constitutional matters and parliamentary procedures.'
  },
  {
    id: 'simon-burns',
    name: 'Simon Burns MP',
    title: 'Former Minister of State',
    image: '/images/Speakers/simon-burns.jpg',
    bio: 'Simon Burns served as Minister of State with extensive experience in policy implementation and departmental management. He provides training on ministerial decision-making and effective policy delivery.'
  },
  {
    id: 'steve-pound',
    name: 'Steve Pound MP',
    title: 'Parliamentary Affairs Expert',
    image: '/images/Speakers/steve_pound.jpg',
    bio: 'Steve Pound MP provides expertise in parliamentary affairs with extensive legislative experience. He offers practical insights into parliamentary procedures and effective parliamentary engagement.'
  },
  {
    id: 'tony-cash',
    name: 'Tony Cash',
    title: 'Senior Government Trainer',
    image: '/images/Speakers/Tony-Cash1.jpg',
    bio: 'Tony Cash is a senior trainer with decades of experience delivering programs to government personnel at all levels. His training expertise spans leadership development, management skills, and professional development for civil servants. He has designed and delivered training programs for multiple government departments and has deep understanding of civil service learning and development needs.'
  },
  {
    id: 'menzies-campbell',
    name: 'Sir Menzies Campbell',
    title: 'Former Leader of the Liberal Democrats',
    image: '/images/Speakers/menzies-campbell.jpg',
    bio: 'Sir Menzies Campbell brings extensive political leadership experience and parliamentary expertise. His insights into political strategy, leadership, and parliamentary affairs are invaluable for understanding the political dimensions of public service.'
  }
];

const speaker = computed(() => speakers.find(s => s.id === props.speakerId));

const goBack = () => {
  navigateTo('/speakers-and-trainers');
};
</script>

<template>
  <section class="py-16 px-4 lg:px-24 bg-background">
    <div class="max-w-6xl mx-auto">
      <button
        @click="goBack"
        class="flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="font-medium">Back to Speakers & Trainers</span>
      </button>

      <div v-if="speaker" class="flex flex-col lg:flex-row gap-12">
        <div class="lg:w-1/3 flex-shrink-0">
          <div class="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img
              :src="speaker.image"
              :alt="speaker.name"
              class="w-full h-full object-cover"
              @error="(e) => (e.target as HTMLImageElement).style.display = 'none'"
            />
          </div>
        </div>

        <div class="lg:w-2/3">
          <h1 class="text-4xl font-bold text-foreground mb-2">{{ speaker.name }}</h1>
          <p class="text-xl text-primary mb-8">{{ speaker.title }}</p>
          <div class="prose prose-lg max-w-none">
            <p class="text-foreground/80 leading-relaxed">{{ speaker.bio }}</p>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-12">
        <h2 class="text-2xl font-semibold text-foreground mb-4">Speaker not found</h2>
        <p class="text-foreground/70 mb-8">The speaker you're looking for doesn't exist.</p>
        <button
          @click="goBack"
          class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Return to Speakers & Trainers
        </button>
      </div>
    </div>
  </section>
</template>
