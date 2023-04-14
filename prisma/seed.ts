/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// a = document.querySelectorAll("td");
// str = "";
// for (i = 0; i < a.length; i += 3) {
//   str +=
//     "const c" +
//     i / 3 +
//     "= await prisma.company.create({ data: { rank: " +
//     a[i].innerHTML +
//     ', name: "' +
//     a[i + 1].innerHTML +
//     '", jobsLink: "' +
//     a[i + 2].firstChild.innerHTML +
//     '",},});';
// }

// console.log(str);

async function main() {
  await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
    },
  });
  await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
    },
  });

  await prisma.company.create({
    data: { rank: 1, name: 'Walmart', jobsLink: 'https://www.walmart.com/' },
  });
  await prisma.company.create({
    data: { rank: 2, name: 'Amazon', jobsLink: 'https://www.amazon.com/' },
  });
  await prisma.company.create({
    data: { rank: 3, name: 'Apple', jobsLink: 'https://www.apple.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 4,
      name: 'CVS Health',
      jobsLink: 'https://www.cvshealth.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 5,
      name: 'UnitedHealth Group',
      jobsLink: 'https://www.unitedhealthgroup.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 6,
      name: 'Exxon Mobil',
      jobsLink: 'https://corporate.exxonmobil.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 7,
      name: 'Berkshire Hathaway',
      jobsLink: 'https://www.berkshirehathaway.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 8, name: 'Alphabet', jobsLink: 'https://abc.xyz/' },
  });
  await prisma.company.create({
    data: { rank: 9, name: 'McKesson', jobsLink: 'https://www.mckesson.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 10,
      name: 'AmerisourceBergen',
      jobsLink: 'https://www.amerisourcebergen.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 11,
      name: 'Costco Wholesale',
      jobsLink: 'https://www.costco.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 12, name: 'Cigna', jobsLink: 'https://www.cigna.com/' },
  });
  await prisma.company.create({
    data: { rank: 13, name: 'AT&amp;T', jobsLink: 'https://www.att.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 14,
      name: 'Microsoft',
      jobsLink: 'https://www.microsoft.com/en-in',
    },
  });
  await prisma.company.create({
    data: {
      rank: 15,
      name: 'Cardinal Health',
      jobsLink: 'https://www.cardinalhealth.com/en.html',
    },
  });
  await prisma.company.create({
    data: { rank: 16, name: 'Chevron', jobsLink: 'https://www.chevron.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 17,
      name: 'Home Depot',
      jobsLink: 'https://www.homedepot.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 18,
      name: 'Walgreens Boots Alliance',
      jobsLink: 'https://www.walgreensbootsalliance.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 19,
      name: 'Marathon Petroleum',
      jobsLink: 'https://www.marathonpetroleum.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 20,
      name: 'Elevance Health',
      jobsLink: 'https://www.elevancehealth.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 21, name: 'Kroger', jobsLink: 'https://www.kroger.com/' },
  });
  await prisma.company.create({
    data: { rank: 22, name: 'Ford Motor', jobsLink: 'https://www.ford.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 23,
      name: 'Verizon Communications',
      jobsLink: 'https://www.verizon.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 24,
      name: 'JPMorgan Chase',
      jobsLink: 'https://www.jpmorganchase.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 25, name: 'General Motors', jobsLink: 'https://www.gm.com/' },
  });
  await prisma.company.create({
    data: { rank: 26, name: 'Centene', jobsLink: 'https://www.centene.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 27,
      name: 'Meta Platforms',
      jobsLink: 'https://about.facebook.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 28,
      name: 'Comcast',
      jobsLink: 'https://corporate.comcast.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 29,
      name: 'Phillips 66',
      jobsLink: 'https://www.phillips66.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 30,
      name: 'Valero Energy',
      jobsLink: 'https://www.valero.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 31,
      name: 'Dell Technologies',
      jobsLink: 'https://www.dell.com/en-in',
    },
  });
  await prisma.company.create({
    data: { rank: 32, name: 'Target', jobsLink: 'https://www.target.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 33,
      name: 'Fannie Mae',
      jobsLink: 'https://www.fanniemae.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 34, name: 'UPS', jobsLink: 'https://www.ups.com/' },
  });
  await prisma.company.create({
    data: { rank: 35, name: "Lowe's", jobsLink: 'https://www.lowes.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 36,
      name: 'Bank of America',
      jobsLink: 'https://www.bankofamerica.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 37,
      name: 'Johnson &amp; Johnson',
      jobsLink: 'https://www.jnj.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 38,
      name: 'Archer Daniels Midland',
      jobsLink: 'https://www.adm.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 39, name: 'FedEx', jobsLink: 'https://www.fedex.com/' },
  });
  await prisma.company.create({
    data: { rank: 40, name: 'Humana', jobsLink: 'https://www.humana.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 41,
      name: 'Wells Fargo',
      jobsLink: 'https://www.wellsfargo.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 42,
      name: 'State Farm Insurance',
      jobsLink: 'https://www.statefarm.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 43, name: 'Pfizer', jobsLink: 'https://www.pfizer.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 44,
      name: 'Citigroup',
      jobsLink: 'https://www.citigroup.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 45, name: 'PepsiCo', jobsLink: 'https://www.pepsico.com/' },
  });
  await prisma.company.create({
    data: { rank: 46, name: 'Intel', jobsLink: 'https://www.intel.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 47,
      name: 'Procter &amp; Gamble',
      jobsLink: 'https://www.pg.co.uk/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 48,
      name: 'General Electric',
      jobsLink: 'https://www.ge.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 49, name: 'IBM', jobsLink: 'https://www.ibm.com/' },
  });
  await prisma.company.create({
    data: { rank: 50, name: 'MetLife', jobsLink: 'https://www.metlife.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 51,
      name: 'Prudential Financial',
      jobsLink: 'https://www.prudential.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 52,
      name: 'Albertsons',
      jobsLink: 'https://www.albertsons.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 53,
      name: 'Walt Disney',
      jobsLink: 'https://thewaltdisneycompany.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 54,
      name: 'Energy Transfer',
      jobsLink: 'https://www.energytransfer.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 55,
      name: 'Lockheed Martin',
      jobsLink: 'https://www.lockheedmartin.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 56,
      name: 'Freddie Mac',
      jobsLink: 'https://www.freddiemac.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 57,
      name: 'Goldman Sachs Group',
      jobsLink: 'https://www.goldmansachs.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 58,
      name: 'Raytheon Technologies',
      jobsLink: 'https://www.rtx.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 59, name: 'HP', jobsLink: 'https://www.hp.com/' },
  });
  await prisma.company.create({
    data: { rank: 60, name: 'Boeing', jobsLink: 'https://www.boeing.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 61,
      name: 'Morgan Stanley',
      jobsLink: 'https://www.morganstanley.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 62,
      name: 'HCAHealthcare',
      jobsLink: 'https://hcahealthcare.com',
    },
  });
  await prisma.company.create({
    data: { rank: 63, name: 'AbbVie', jobsLink: 'https://www.abbvie.com/' },
  });
  await prisma.company.create({
    data: { rank: 64, name: 'Dow', jobsLink: 'https://www.dow.com/' },
  });
  await prisma.company.create({
    data: { rank: 65, name: 'Tesla', jobsLink: 'https://www.tesla.com/' },
  });
  await prisma.company.create({
    data: { rank: 66, name: 'Allstate', jobsLink: 'https://www.allstate.com/' },
  });
  await prisma.company.create({
    data: { rank: 67, name: 'AIG', jobsLink: 'https://www.aig.com/' },
  });
  await prisma.company.create({
    data: { rank: 68, name: 'Best Buy', jobsLink: 'https://www.bestbuy.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 69,
      name: 'Charter Communications',
      jobsLink: 'https://corporate.charter.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 70, name: 'Sysco', jobsLink: 'https://www.sysco.com/' },
  });
  await prisma.company.create({
    data: { rank: 71, name: 'Merck', jobsLink: 'https://www.merck.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 72,
      name: 'New York Life Insurance',
      jobsLink: 'https://www.newyorklife.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 73,
      name: 'Caterpillar',
      jobsLink: 'https://www.caterpillar.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 74,
      name: 'Cisco Systems',
      jobsLink: 'https://www.cisco.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 75, name: 'TJX', jobsLink: 'https://www.tjx.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 76,
      name: 'Publix Super Markets',
      jobsLink: 'https://www.publix.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 77,
      name: 'ConocoPhillips',
      jobsLink: 'https://www.conocophillips.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 78,
      name: 'Liberty Mutual Insurance Group',
      jobsLink: 'https://www.libertymutualgroup.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 79,
      name: 'Progressive',
      jobsLink: 'https://www.progressive.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 80,
      name: 'Nationwide',
      jobsLink: 'https://www.nationwide.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 81,
      name: 'Tyson Foods',
      jobsLink: 'https://www.tysonfoods.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 82,
      name: 'Bristol-Myers Squibb',
      jobsLink: 'https://www.bms.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 83, name: 'Nike', jobsLink: 'https://www.nike.com/' },
  });
  await prisma.company.create({
    data: { rank: 84, name: 'Deere', jobsLink: 'https://www.deere.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 85,
      name: 'American Express',
      jobsLink: 'https://www.americanexpress.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 86,
      name: 'Abbott Laboratories',
      jobsLink: 'https://www.abbott.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 87,
      name: 'StoneX Group',
      jobsLink: 'https://www.stonex.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 88,
      name: 'Plains GP Holdings',
      jobsLink: 'https://www.plains.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 89,
      name: 'Enterprise Products',
      jobsLink: 'https://www.enterpriseproducts.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 90, name: 'TIAA', jobsLink: 'https://www.tiaa.org/' },
  });
  await prisma.company.create({
    data: { rank: 91, name: 'Oracle', jobsLink: 'https://www.oracle.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 92,
      name: 'Thermo Fisher Scientific',
      jobsLink: 'https://www.thermofisher.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 93,
      name: 'Coca-Cola',
      jobsLink: 'https://www.coca-colacompany.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 94,
      name: 'General Dynamics',
      jobsLink: 'https://www.gd.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 95, name: 'CHS', jobsLink: 'https://www.chsinc.com/' },
  });
  await prisma.company.create({
    data: { rank: 96, name: 'USAA', jobsLink: 'https://www.usaa.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 97,
      name: 'Northwestern Mutual',
      jobsLink: 'https://www.northwesternmutual.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 98, name: 'Nucor', jobsLink: 'https://www.nucor.com/' },
  });
  await prisma.company.create({
    data: { rank: 99, name: 'Exelon', jobsLink: 'https://www.exeloncorp.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 100,
      name: 'Massachusetts Mutual Life',
      jobsLink: 'https://www.massmutual.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 101,
      name: 'Northrop Grumman',
      jobsLink: 'https://www.northropgrumman.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 102, name: '3M', jobsLink: 'https://www.3m.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 103,
      name: 'Travelers',
      jobsLink: 'https://www.travelers.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 104,
      name: 'Arrow Electronics',
      jobsLink: 'https://www.arrow.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 105,
      name: 'Honeywell International',
      jobsLink: 'https://www.honeywell.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 106,
      name: 'Dollar General',
      jobsLink: 'https://www.dollargeneral.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 107,
      name: 'Qualcomm',
      jobsLink: 'https://www.qualcomm.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 108,
      name: 'Capital One Financial',
      jobsLink: 'https://www.capitalone.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 109,
      name: 'TD Synnex',
      jobsLink: 'https://www.tdsynnex.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 110,
      name: 'Philip Morris Internationé',
      jobsLink: 'https://www.pmi.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 111,
      name: 'World Fuel Services',
      jobsLink: 'https://www.wfscorp.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 112,
      name: 'Performance Food Group',
      jobsLink: 'https://www.pfgc.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 113,
      name: 'Delta Air Lines',
      jobsLink: 'https://www.delta.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 114,
      name: 'American Airlines Group',
      jobsLink: 'https://www.aa.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 115, name: 'Netflix', jobsLink: 'https://www.netflix.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 116,
      name: 'Paramount Global',
      jobsLink: 'https://www.paramount.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 117,
      name: 'US Foods Holding',
      jobsLink: 'https://www.usfoods.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 118, name: 'Danaher', jobsLink: 'https://www.danaher.com/' },
  });
  await prisma.company.create({
    data: { rank: 119, name: 'Jabil', jobsLink: 'https://www.jabil.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 120,
      name: 'Starbucks',
      jobsLink: 'https://www.starbucks.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 121,
      name: 'Mondelez International',
      jobsLink: 'https://www.mondelezinternational.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 122, name: 'EliLilly', jobsLink: 'https://www.lilly.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 123,
      name: 'Hewlett Packard Enterpri',
      jobsLink: 'https://www.hpe.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 124,
      name: 'D.R. Horton',
      jobsLink: 'https://www.drhorton.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 125,
      name: 'Molina Healthcare',
      jobsLink: 'http://www.molinahealthcare.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 126, name: 'CBRE Group', jobsLink: 'https://www.cbre.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 127,
      name: 'Micron Technology',
      jobsLink: 'https://www.micron.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 128,
      name: 'Broadcom',
      jobsLink: 'https://www.broadcom.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 129,
      name: 'Gilead Sciences',
      jobsLink: 'https://www.gilead.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 130,
      name: 'PBF Energy',
      jobsLink: 'https://www.pbfenergy.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 131, name: 'Lennar', jobsLink: 'https://www.lennar.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 132,
      name: 'United Natural Foods',
      jobsLink: 'https://www.unfi.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 133, name: 'NRG Energy', jobsLink: 'https://www.nrg.com/' },
  });
  await prisma.company.create({
    data: { rank: 134, name: 'Nvidia', jobsLink: 'https://www.nvidia.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 135,
      name: 'Occidental Petroleum',
      jobsLink: 'https://www.oxy.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 136,
      name: 'Salesforce',
      jobsLink: 'https://www.salesforce.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 137,
      name: 'Dollar Tree',
      jobsLink: 'https://www.dollartree.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 138, name: 'KKR', jobsLink: 'https://www.kkr.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 139,
      name: 'Kraft Heinz',
      jobsLink: 'https://www.kraftheinzcompany.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 140, name: 'Amgen', jobsLink: 'https://www.amgen.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 141,
      name: 'AutoNation',
      jobsLink: 'https://www.autonation.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 142,
      name: 'Penske Automotive Group',
      jobsLink: 'https://www.penskeautomotive.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 143,
      name: 'PayPal Holdings',
      jobsLink: 'https://www.paypal.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 144, name: "Macy's", jobsLink: 'https://www.macys.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 145,
      name: 'Duke Energy',
      jobsLink: 'https://www.duke-energy.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 146,
      name: 'United Airlines Holdings',
      jobsLink: 'https://ir.united.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 147, name: 'Visa', jobsLink: 'https://www.visa.com/' },
  });
  await prisma.company.create({
    data: { rank: 148, name: 'Rite Aid', jobsLink: 'https://www.riteaid.com/' },
  });
  await prisma.company.create({
    data: { rank: 149, name: 'Cummins', jobsLink: 'https://www.cummins.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 150,
      name: 'U.S. Bancorp',
      jobsLink: 'https://www.usbank.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 151, name: 'Paccar', jobsLink: 'https://www.paccar.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 152,
      name: "McDonald's",
      jobsLink: 'https://www.mcdonalds.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 153,
      name: 'Southern',
      jobsLink: 'https://www.southernrailway.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 154,
      name: 'C.H. Robinson Worldwide',
      jobsLink: 'https://www.chrobinson.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 155,
      name: 'Truist Financial',
      jobsLink: 'https://www.truist.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 156,
      name: 'Applied Materials',
      jobsLink: 'https://www.appliedmaterials.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 157,
      name: 'Freeport-McMoRan',
      jobsLink: 'https://www.fcx.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 158,
      name: 'Lithia Motors',
      jobsLink: 'https://www.lithia.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 159,
      name: 'Blackstone',
      jobsLink: 'https://www.blackstone.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 160,
      name: 'Hartford Financial Services Group',
      jobsLink: 'https://www.thehartford.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 161, name: 'Aflac', jobsLink: 'https://www.aflac.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 162,
      name: 'Whirlpool',
      jobsLink: 'https://www.whirlpoolindia.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 163, name: 'Union Pacific', jobsLink: 'https://www.up.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 164,
      name: 'International Paper',
      jobsLink: 'https://www.internationalpaper.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 165,
      name: 'AltriaGroup',
      jobsLink: 'https://www.altria.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 166, name: 'CDW', jobsLink: 'https://www.cdw.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 167,
      name: 'ManpowerGroup',
      jobsLink: 'https://www.manpowergroup.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 168, name: 'PG&amp;E', jobsLink: 'https://www.pgecorp.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 169,
      name: 'Carrier Global',
      jobsLink: 'https://www.corporate.carrier.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 170,
      name: 'Baker Hughes',
      jobsLink: 'https://www.bakerhughes.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 171,
      name: 'Cleveland-Cliffs',
      jobsLink: 'https://www.clevelandcliffs.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 172,
      name: 'United States Steel',
      jobsLink: 'https://www.ussteel.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 173,
      name: 'Becton Dickinson',
      jobsLink: 'https://www.bd.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 174, name: 'CarMax', jobsLink: 'https://www.carmax.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 175,
      name: 'Sherwin-Williams',
      jobsLink: 'https://www.sherwin-williams.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 176,
      name: 'Builders FirstSource',
      jobsLink: 'https://www.bldr.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 177,
      name: 'Marsh &amp; McLennan',
      jobsLink: 'https://www.marsh.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 178,
      name: 'PNC Financial Services',
      jobsLink: 'https://www.pnc.com/en/personal-banking.html',
    },
  });
  await prisma.company.create({
    data: {
      rank: 179,
      name: 'Lumen Technologies',
      jobsLink: 'https://www.lumen.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 180, name: 'Avnet', jobsLink: 'https://www.avnet.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 181,
      name: 'Tenet Healthcare',
      jobsLink: 'https://www.tenethealth.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 182,
      name: 'Kimberly-Clark',
      jobsLink: 'https://www.kimberly-clark.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 183, name: "Kohl's", jobsLink: 'https://www.kohls.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 184,
      name: 'BlackRock',
      jobsLink: 'https://www.blackrock.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 185,
      name: 'Jones Lang LaSalle',
      jobsLink: 'https://www.us.jll.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 186, name: 'Lear', jobsLink: 'https://www.lear.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 187,
      name: 'Lincoln National',
      jobsLink: 'https://www.lincolnfinancial.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 188,
      name: 'Charles Schwab',
      jobsLink: 'https://www.schwab.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 189,
      name: 'Ross Stores',
      jobsLink: 'https://www.rossstores.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 190,
      name: 'Mastercard',
      jobsLink: 'https://www.mastercard.us/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 191,
      name: 'Genuine Parts',
      jobsLink: 'https://www.genpt.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 192,
      name: 'WestRock',
      jobsLink: 'https://www.westrock.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 193,
      name: 'EOG Resources',
      jobsLink: 'https://www.eogresources.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 194,
      name: 'goanizant Technology',
      jobsLink: 'https://www.cognizant.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 195,
      name: 'Moderna',
      jobsLink: 'https://www.modernatx.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 196,
      name: 'Steel Dynamics',
      jobsLink: 'https://stld.steeldynamics.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 197,
      name: 'HF Sinclair',
      jobsLink: 'https://www.hfsinclair.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 198,
      name: 'Texas Instruments',
      jobsLink: 'https://www.ti.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 199,
      name: 'Emerson Electric',
      jobsLink: 'https://www.emerson.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 200,
      name: 'WESCO International',
      jobsLink: 'https://www.wesco.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 201,
      name: 'General Mills',
      jobsLink: 'https://www.generalmills.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 202, name: 'Tenneco', jobsLink: 'https://www.tenneco.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 203,
      name: 'Waste Management',
      jobsLink: 'https://gwcnweb.org/',
    },
  });
  await prisma.company.create({
    data: { rank: 204, name: 'Viatris', jobsLink: 'https://www.viatris.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 205,
      name: 'DISH Network',
      jobsLink: 'https://www.dish.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 206,
      name: 'L3Harris Technologies',
      jobsLink: 'https://www.l3harris.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 207, name: 'DXC Technology', jobsLink: 'https://dxc.com/' },
  });
  await prisma.company.create({
    data: { rank: 208, name: 'Block', jobsLink: 'https://www.block.xyz/' },
  });
  await prisma.company.create({
    data: {
      rank: 209,
      name: 'Goodyear Tire &amp; Rubber',
      jobsLink: 'https://www.goodyear.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 210,
      name: 'Uber Technologies',
      jobsLink: 'https://www.uber.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 211,
      name: 'Colgate-Palmolive',
      jobsLink: 'https://www.colgatepalmolive.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 212,
      name: 'Stanley Black &amp; Decker',
      jobsLink: 'https://www.stanleyblackanddecker.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 213, name: 'DuPont', jobsLink: 'https://www.dupont.com/' },
  });
  await prisma.company.create({
    data: { rank: 214, name: 'Stryker', jobsLink: 'https://www.stryker.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 215,
      name: 'NextEra Energy',
      jobsLink: 'https://www.nexteraenergy.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 216,
      name: 'Targa Resources',
      jobsLink: 'https://www.targaresources.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 217,
      name: 'Western Digital',
      jobsLink: 'https://www.westerndigital.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 218,
      name: 'PPG Industries',
      jobsLink: 'https://www.ppg.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 219,
      name: 'American Electric Power',
      jobsLink: 'https://www.aep.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 220, name: 'Gap', jobsLink: 'https://www.gap.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 221,
      name: "BJ's Wholesale Club",
      jobsLink: 'https://www.bjs.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 222,
      name: 'Reinsurance Group of',
      jobsLink: 'https://www.rgare.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 223,
      name: 'Kinder Morgan',
      jobsLink: 'https://www.kindermorgan.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 224, name: 'Oneok', jobsLink: 'https://www.oneok.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 225,
      name: 'Expeditors Intl. of Washington',
      jobsLink: 'https://www.expeditors.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 226,
      name: 'Advanced Micro Devices',
      jobsLink: 'https://www.amd.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 227, name: 'Fiserv', jobsLink: 'https://www.fiserv.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 228,
      name: 'Estée Lauder',
      jobsLink: 'https://www.elcompanies.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 229,
      name: 'Bank of New York Mellon',
      jobsLink: 'https://www.bnymellon.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 230,
      name: 'Laboratory Corp. of America',
      jobsLink: 'https://www.labcorp.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 231,
      name: 'Regeneron Pharmaceuticals',
      jobsLink: 'https://www.regeneron.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 232,
      name: "Land O'Lakes",
      jobsLink: 'https://www.landolakesinc.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 233,
      name: 'Cheniere Energy',
      jobsLink: 'https://www.cheniere.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 234,
      name: 'Southwest Airlines',
      jobsLink: 'https://www.southwest.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 235, name: 'Adobe', jobsLink: 'https://www.adobe.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 236,
      name: 'Synchrony Financial',
      jobsLink: 'https://www.synchrony.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 237, name: 'Corteva', jobsLink: 'https://www.corteva.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 238,
      name: 'Fidelity National Financial',
      jobsLink: 'https://fnf.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 239,
      name: 'DTEEnergy',
      jobsLink: 'https://www.newlook.dteenergy.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 240,
      name: 'Murphy USA',
      jobsLink: 'https://www.murphyusa.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 241,
      name: 'Halliburton',
      jobsLink: 'https://www.halliburton.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 242,
      name: 'Automatic Data Processing',
      jobsLink: 'https://www.adp.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 243,
      name: 'Edison International',
      jobsLink: 'https://www.edison.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 244,
      name: 'BorgWarner',
      jobsLink: 'https://www.borgwarner.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 245,
      name: 'Nordstrom',
      jobsLink: 'https://www.nordstrom.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 246, name: 'Loews', jobsLink: 'https://loews.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 247,
      name: 'Guardian Life Ins. Co. of America',
      jobsLink: 'https://www.guardianlife.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 248,
      name: 'Pioneer Natural Resources',
      jobsLink: 'https://www.pxd.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 249,
      name: 'AutoZone',
      jobsLink: 'https://www.autozone.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 250,
      name: 'Lam Research',
      jobsLink: 'https://www.lamresearch.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 251,
      name: 'American Family Insurance Group',
      jobsLink: 'https://www.amfam.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 252,
      name: 'Illinois Tool Works',
      jobsLink: 'https://www.itw.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 253,
      name: 'Parker-Hannifin',
      jobsLink: 'https://www.parker.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 254,
      name: 'Otis Worldwide',
      jobsLink: 'https://www.otis.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 255,
      name: 'Omnicom Group',
      jobsLink: 'https://www.omnicomgroup.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 256,
      name: 'Principal Financial',
      jobsLink: 'https://www.principal.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 257,
      name: 'Dominion Energy',
      jobsLink: 'https://www.dominionenergy.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 258, name: 'Kellogg', jobsLink: 'https://www.kelloggs.com/' },
  });
  await prisma.company.create({
    data: { rank: 259, name: 'Fluor', jobsLink: 'https://www.fluor.com/' },
  });
  await prisma.company.create({
    data: { rank: 260, name: 'AECOM', jobsLink: 'https://aecom.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 261,
      name: 'Reliance Steel &amp; Aluminum',
      jobsLink: 'https://www.rsac.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 262,
      name: 'Jacobs Engineering Group',
      jobsLink: 'https://www.jacobs.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 263, name: 'Corning', jobsLink: 'https://www.corning.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 264,
      name: 'Farmers Insurance Exchange',
      jobsLink: 'https://www.farmers.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 265,
      name: 'Qurate Retail',
      jobsLink: 'https://www.qurateretailgroup.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 266,
      name: 'Pacific Life',
      jobsLink: 'https://www.pacificlife.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 267,
      name: 'PulteGroup',
      jobsLink: 'https://www.pultegroupinc.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 268,
      name: 'Fidelity National Information Services',
      jobsLink: 'https://www.fisglobal.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 269,
      name: '1QVIA Holdings',
      jobsLink: 'https://www.iqvia.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 270,
      name: 'Marriott International',
      jobsLink: 'https://www.marriott.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 271,
      name: 'Berry Global Group',
      jobsLink: 'https://www.berryglobal.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 272, name: 'Ball', jobsLink: 'https://www.ball.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 273,
      name: 'Group 1 Automotive',
      jobsLink: 'https://www.group1auto.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 274,
      name: 'Leidos Holdings',
      jobsLink: 'https://www.leidos.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 275, name: 'Wayfair', jobsLink: 'https://www.wayfair.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 276,
      name: 'Consolidated Edison',
      jobsLink: 'https://www.coned.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 277,
      name: 'Ameriprise Financial',
      jobsLink: 'https://www.ameriprise.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 278,
      name: 'Xcel Energy',
      jobsLink: 'https://my.xcelenergy.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 279,
      name: "O'Reilly Automotive",
      jobsLink: 'https://www.oreillyauto.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 280,
      name: 'Global Partners',
      jobsLink: 'https://www.globalp.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 281,
      name: 'Discover Financial Services',
      jobsLink: 'https://www.discover.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 282,
      name: 'Rocket Companies',
      jobsLink: 'https://www.rocketcompanies.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 283, name: 'LKQ', jobsLink: 'https://www.lkqcorp.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 284,
      name: 'W.W. Grainger',
      jobsLink: 'https://www.grainger.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 285,
      name: 'Quanta Services',
      jobsLink: 'https://www.quantaservices.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 286,
      name: 'CrownHoldings',
      jobsLink: 'https://www.crowncork.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 287, name: 'Fox', jobsLink: 'https://www.foxnews.com/' },
  });
  await prisma.company.create({
    data: { rank: 288, name: 'Sempra', jobsLink: 'https://www.sempra.com/' },
  });
  await prisma.company.create({
    data: { rank: 289, name: 'Markel', jobsLink: 'https://www.markel.com/' },
  });
  await prisma.company.create({
    data: { rank: 290, name: 'Carvana', jobsLink: 'https://www.carvana.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 291,
      name: 'XPO Logistics',
      jobsLink: 'https://www.xpo.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 292,
      name: 'Baxter International',
      jobsLink: 'https://www.baxter.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 293, name: 'Ecolab', jobsLink: 'https://www.ecolab.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 294,
      name: 'Tractor Supply',
      jobsLink: 'https://www.tractorsupply.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 295,
      name: 'The Andersons',
      jobsLink: 'https://www.andersonsinc.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 296,
      name: 'Keurig Dr Pepper',
      jobsLink: 'https://www.keurigdrpepper.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 297,
      name: 'Universal Health Services',
      jobsLink: 'https://uhs.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 298, name: 'CSX', jobsLink: 'https://www.csx.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 299,
      name: 'Henry Schein',
      jobsLink: 'https://www.henryschein.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 300,
      name: 'Sonic Automotive',
      jobsLink: 'https://www.sonicautomotive.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 301, name: 'eBay', jobsLink: 'https://www.ebay.com/' },
  });
  await prisma.company.create({
    data: { rank: 302, name: 'Textron', jobsLink: 'https://www.textron.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 303,
      name: 'Jones Financial (Edward Jones)',
      jobsLink: 'https://www.edwardjones.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 304,
      name: 'Community Health Systems',
      jobsLink: 'https://www.chs.net/',
    },
  });
  await prisma.company.create({
    data: { rank: 305, name: 'Mosaic', jobsLink: 'https://www.mosaicco.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 306,
      name: 'Thor Industries',
      jobsLink: 'https://www.thorindustries.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 307,
      name: "Dick's Sporting Goods",
      jobsLink: 'https://www.dickssportinggoods.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 308, name: 'Newmont', jobsLink: 'https://newmont.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 309,
      name: 'Devon Energy',
      jobsLink: 'https://www.devonenergy.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 310,
      name: 'Warner Bros. Discovery',
      jobsLink: 'https://wbd.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 311,
      name: 'J.B. Hunt Transport Services',
      jobsLink: 'https://www.jbhunt.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 312, name: 'Alcoa', jobsLink: 'https://www.alcoa.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 313,
      name: "Peter Kiewit Sons'",
      jobsLink: 'https://www.kiewit.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 314, name: 'Aramark', jobsLink: 'https://www.aramark.com/' },
  });
  await prisma.company.create({
    data: { rank: 315, name: 'Vistra', jobsLink: 'https://www.vistra.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 316,
      name: 'State Street',
      jobsLink: 'https://www.statestreet.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 317, name: 'Unum Group', jobsLink: 'https://www.unum.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 318,
      name: 'Alleghany',
      jobsLink: 'https://www.alleghany.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 319,
      name: 'Boston Scientific',
      jobsLink: 'https://www.bostonscientific.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 320,
      name: 'Westlake',
      jobsLink: 'https://www.westlake.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 321, name: 'Entergy', jobsLink: 'https://www.entergy.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 322,
      name: 'International Flavors &amp; Fragrances',
      jobsLink: 'https://www.iff.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 323, name: 'DaVita', jobsLink: 'https://www.davita.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 324,
      name: 'Mutual of Omaha Insurance',
      jobsLink: 'https://www.mutualofomaha.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 325,
      name: 'Assurant',
      jobsLink: 'https://www.assurant.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 326,
      name: 'Liberty Media',
      jobsLink: 'https://www.libertymedia.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 327,
      name: 'Hormel Foods',
      jobsLink: 'https://www.hormelfoods.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 328,
      name: 'Icahn Enterprises',
      jobsLink: 'https://www.ielp.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 329,
      name: 'Republic Services',
      jobsLink: 'https://www.republicservices.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 330,
      name: 'Mohawk Industries',
      jobsLink: 'https://mohawkind.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 331,
      name: 'Conagra Brands',
      jobsLink: 'https://www.conagrabrands.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 332,
      name: 'Norfolk Southern',
      jobsLink: 'http://www.nscorp.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 333, name: 'AES', jobsLink: 'https://www.aes.com/' },
  });
  await prisma.company.create({
    data: { rank: 334, name: 'AGCO', jobsLink: 'https://www.agcocorp.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 335,
      name: 'Caesars Entertainment',
      jobsLink: 'https://www.caesars.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 336,
      name: 'Equitable Holdings',
      jobsLink: 'https://equitableholdings.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 337,
      name: 'Advance Auto Parts',
      jobsLink: 'https://shop.advanceautoparts.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 338, name: 'Biogen', jobsLink: 'https://www.biogen.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 339,
      name: 'Auto-Owners Insurance',
      jobsLink: 'http://www.auto-owners.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 340,
      name: 'Booking Holdings',
      jobsLink: 'https://www.bookingholdings.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 341, name: 'Amphenol', jobsLink: 'https://amphenol.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 342,
      name: 'Quest Diagnostics',
      jobsLink: 'https://www.questdiagnostics.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 343,
      name: 'FirstEnergy',
      jobsLink: 'https://firstenergycorp.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 344,
      name: 'DCP Midstream',
      jobsLink: 'https://www.dcpmidstream.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 345,
      name: 'Ally Financial',
      jobsLink: 'https://www.ally.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 346,
      name: 'Delek US Holdings',
      jobsLink: 'https://www.delekus.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 347,
      name: 'Williams',
      jobsLink: 'https://www.williamsf1.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 348,
      name: 'Newell Brands',
      jobsLink: 'https://www.newellbrands.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 349,
      name: 'Eastman Chemical',
      jobsLink: 'https://www.eastman.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 350,
      name: 'Air Products &amp; Chemicals',
      jobsLink: 'https://www.airproducts.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 351,
      name: 'Thrivent Financial for',
      jobsLink: 'https://www.thrivent.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 352,
      name: 'Molson Coors Beverage',
      jobsLink: 'https://www.molsoncoors.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 353,
      name: 'Interpublic Group',
      jobsLink: 'https://www.interpublic.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 354,
      name: 'Weyerhaeuser',
      jobsLink: 'https://www.weyerhaeuser.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 355,
      name: 'Altice USA',
      jobsLink: 'https://www.alticeusa.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 356,
      name: 'Raymond James Financial',
      jobsLink: 'https://www.raymondjames.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 357,
      name: 'EMCOR Group',
      jobsLink: 'https://www.emcorgroup.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 358,
      name: 'Eversource Energy',
      jobsLink: 'https://www.eversource.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 359,
      name: 'Yum China Holdings',
      jobsLink: 'https://ir.yumchina.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 360,
      name: 'Asbury Automotive Group',
      jobsLink: 'https://www.asburyauto.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 361,
      name: 'Owens &amp; Minor',
      jobsLink: 'https://www.owens.edu/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 362,
      name: 'Public Service Enterprise Group',
      jobsLink: 'https://landing.pseg.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 363,
      name: 'United Rentals',
      jobsLink: 'https://www.unitedrentals.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 364,
      name: 'MGM Resorts International',
      jobsLink: 'https://www.mgmresorts.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 365,
      name: 'Ryder System',
      jobsLink: 'https://www.ryder.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 366, name: 'Intuit', jobsLink: 'https://www.intuit.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 367,
      name: 'Cincinnati Financial',
      jobsLink: 'https://www.cinfin.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 368,
      name: 'Erie Insurance Group',
      jobsLink: 'https://www.erieinsurance.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 369,
      name: 'Univar Solutions',
      jobsLink: 'https://www.univarsolutions.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 370,
      name: 'Huntington Ingalls Industries',
      jobsLink: 'https://huntingtoningalls.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 371,
      name: 'W.R. Berkley',
      jobsLink: 'https://www.berkley.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 372,
      name: 'Western and Southen Financial Group',
      jobsLink: 'https://www.westernsouthern.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 373,
      name: 'Insight Enterprises',
      jobsLink: 'https://www.insight.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 374, name: 'News Corp.', jobsLink: 'https://newscorp.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 375,
      name: 'American Tower',
      jobsLink: 'https://www.americantower.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 376,
      name: 'Old Republic International',
      jobsLink: 'https://www.oldrepublic.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 377,
      name: 'Burlington Stores',
      jobsLink: 'https://www.burlington.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 378,
      name: 'Avis Budget Group',
      jobsLink: 'https://avisbudgetgroup.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 379, name: 'ODP', jobsLink: 'https://www.officedepot.com/' },
  });
  await prisma.company.create({
    data: { rank: 380, name: 'VF', jobsLink: 'vfc.com' },
  });
  await prisma.company.create({
    data: {
      rank: 381,
      name: 'Bed Bath &amp; Beyond',
      jobsLink: 'https://www.bedbathandbeyond.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 382,
      name: 'Seaboard',
      jobsLink: 'https://www.seaboardcorp.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 383,
      name: 'First American Financial',
      jobsLink: 'https://www.firstam.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 384,
      name: 'Intercontinental Exchange',
      jobsLink: 'https://www.theice.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 385, name: 'PVH', jobsLink: 'https://www.pvh.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 386,
      name: 'Apollo Global Management',
      jobsLink: 'https://www.apollo.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 387,
      name: 'Jefferies Financial Group',
      jobsLink: 'https://www.jefferies.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 388,
      name: 'Hershey',
      jobsLink: 'https://www.thehersheycompany.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 389, name: 'NVR', jobsLink: 'https://www.nvrinc.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 390,
      name: 'Foot Locker',
      jobsLink: 'https://www.footlocker.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 391, name: 'Dana', jobsLink: 'https://www.dana.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 392,
      name: 'SpartanNash',
      jobsLink: 'https://www.spartannash.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 393, name: 'Olin', jobsLink: 'https://olin.com/' },
  });
  await prisma.company.create({
    data: { rank: 394, name: 'Chewy', jobsLink: 'https://www.chewy.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 395,
      name: 'Jackson Financial',
      jobsLink: 'https://www.jackson.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 396,
      name: 'Activision Blizzard',
      jobsLink: 'https://www.activisionblizzard.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 397,
      name: 'Toll Brothers',
      jobsLink: 'https://www.tollbrothers.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 398,
      name: 'Carlyle Group',
      jobsLink: 'https://www.carlyle.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 399,
      name: 'Graybar Electric',
      jobsLink: 'https://www.graybar.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 400, name: 'Ovintiv', jobsLink: 'https://www.ovintiv.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 401,
      name: 'UFP Industries',
      jobsLink: 'https://www.ufpi.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 402, name: 'Ulta Beauty', jobsLink: 'https://www.ulta.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 403,
      name: 'Constellation Brands',
      jobsLink: 'https://www.cbrands.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 404,
      name: 'Expedia Group',
      jobsLink: 'https://www.expediagroup.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 405,
      name: 'CommScope Holding',
      jobsLink: 'https://www.commscope.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 406,
      name: 'Celanese',
      jobsLink: 'https://www.celanese.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 407,
      name: 'Global Payments',
      jobsLink: 'https://www.globalpayments.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 408,
      name: 'Owens Corning',
      jobsLink: 'https://www.owenscorning.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 409,
      name: 'Campbell Soup',
      jobsLink: 'https://www.campbells.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 410,
      name: 'Huntsman',
      jobsLink: 'https://www.huntsman.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 411,
      name: 'Franklin Resources',
      jobsLink: 'https://www.franklinresources.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 412,
      name: 'Avery Dennison',
      jobsLink: 'https://www.averydennison.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 413, name: 'Masco', jobsLink: 'https://masco.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 414,
      name: 'CenterPoint Energy',
      jobsLink: 'https://www.centerpointenergy.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 415,
      name: 'Fifth Third Bancorp',
      jobsLink: 'https://www.53.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 416,
      name: 'WEC Energy Group',
      jobsLink: 'https://www.wecenergygroup.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 417,
      name: 'S&amp;P Global',
      jobsLink: 'https://www.spglobal.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 418,
      name: 'FMGlobal',
      jobsLink: 'https://www.fmglobal.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 419, name: 'Polaris', jobsLink: 'https://www.polaris.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 420,
      name: 'Williams-Sonoma',
      jobsLink: 'https://www.williams-sonoma.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 421, name: 'Autoliv', jobsLink: 'https://www.autoliv.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 422,
      name: 'Arthur J. Gallagher',
      jobsLink: 'https://www.ajg.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 423,
      name: 'Motorola Solutions',
      jobsLink: 'https://www.motorolasolutions.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 424,
      name: 'Tillow Group',
      jobsLink: 'https://www.zillowgroup.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 425,
      name: 'Opendoor Technologies',
      jobsLink: 'https://www.opendoor.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 426,
      name: 'J.M. Smucker',
      jobsLink: 'https://www.jmsmucker.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 427,
      name: 'Anywhere Real Estate',
      jobsLink: 'https://www.anywhere.re/',
    },
  });
  await prisma.company.create({
    data: { rank: 428, name: 'Oshkosh', jobsLink: 'https://www.oshkosh.com/' },
  });
  await prisma.company.create({
    data: { rank: 429, name: 'MasTec', jobsLink: 'https://www.mastec.com/' },
  });
  await prisma.company.create({
    data: { rank: 430, name: 'GXO Logistics', jobsLink: 'https://gxo.com/' },
  });
  await prisma.company.create({
    data: { rank: 431, name: 'APA', jobsLink: 'https://www.apa.org/' },
  });
  await prisma.company.create({
    data: { rank: 432, name: 'Boise Cascade', jobsLink: 'https://www.bc.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 433,
      name: 'Dover',
      jobsLink: 'https://www.dovercorporation.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 434,
      name: 'Genworth Financial',
      jobsLink: 'https://www.genworth.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 435,
      name: 'Bath &amp; Body Works',
      jobsLink: 'https://www.bathandbodyworks.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 436,
      name: 'Booz Allen Hamilton Holding',
      jobsLink: 'https://www.boozallen.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 437,
      name: 'Coinbase Global',
      jobsLink: 'https://www.coinbase.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 438,
      name: 'Zimmer Biomet Holdings',
      jobsLink: 'https://www.zimmerbiomet.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 439,
      name: 'Westinghouse Air Break Technologies',
      jobsLink: 'https://www.wabteccorp.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 440, name: 'Zoetis', jobsLink: 'https://www.zoetis.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 441,
      name: 'Packaging Corp. of America',
      jobsLink: 'https://www.packagingcorp.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 442,
      name: 'LPL Financial Holdings',
      jobsLink: 'https://www.lpl.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 443,
      name: 'T. Rowe Price',
      jobsLink: 'https://www.troweprice.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 444,
      name: 'Fortune Brands Home &amp; Security',
      jobsLink: 'https://www.fbhs.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 445,
      name: "Casey's General Stores",
      jobsLink: 'https://www.caseys.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 446, name: 'A-Mark Precious Metals', jobsLink: 'amark.com' },
  });
  await prisma.company.create({
    data: { rank: 447, name: 'Hess', jobsLink: 'https://www.hess.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 448,
      name: 'Vertex Pharmaceuticals',
      jobsLink: 'https://www.vrtx.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 449,
      name: 'KeyCorp',
      jobsLink: 'http://www.keycorpltd.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 450,
      name: 'Chipotle Mexican Grill',
      jobsLink: 'https://www.chipotle.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 451,
      name: 'CMS Energy',
      jobsLink: 'https://www.cmsenergy.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 452, name: 'Arconic', jobsLink: 'https://www.arconic.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 453,
      name: 'Taylor Morrison Home',
      jobsLink: 'https://www.taylormorrison.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 454,
      name: 'American Financial Group',
      jobsLink: 'https://www.afginc.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 455, name: 'UGI', jobsLink: 'https://www.ugicorp.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 456,
      name: 'Science Applications International',
      jobsLink: 'https://www.saic.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 457,
      name: 'Avantor',
      jobsLink: 'https://www.avantorsciences.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 458,
      name: 'Hanesbrands',
      jobsLink: 'https://www.hanes.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 459, name: 'Clorox', jobsLink: 'https://www.clorox.com/' },
  });
  await prisma.company.create({
    data: { rank: 460, name: 'KBR', jobsLink: 'https://www.kbr.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 461,
      name: 'TravelCenters of America',
      jobsLink: 'https://www.ta-petro.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 462,
      name: 'Hertz Global Holdings',
      jobsLink: 'https://ir.hertz.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 463,
      name: 'Analog Devices',
      jobsLink: 'https://www.analog.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 464,
      name: 'Securian Financial Group',
      jobsLink: 'https://www.securian.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 465,
      name: 'Darden Restaurants',
      jobsLink: 'https://www.darden.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 466,
      name: 'Graphic Packaging Holding',
      jobsLink: 'https://www.graphicpkg.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 466, name: 'NCR', jobsLink: 'https://www.ncr.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 468,
      name: 'Brighthouse Financial',
      jobsLink: 'https://www.brighthousefinancial.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 469, name: 'PPL', jobsLink: 'https://www.pplindia.org/' },
  });
  await prisma.company.create({
    data: { rank: 470, name: 'Cintas', jobsLink: 'https://www.cintas.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 471,
      name: 'Xerox Holdings',
      jobsLink: 'https://www.xerox.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 472,
      name: 'Rockwell Automation',
      jobsLink: 'https://www.rockwellautomation.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 473,
      name: 'Citizens Financial Group',
      jobsLink: 'https://www.citizensbank.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 474, name: 'KLA', jobsLink: 'https://www.kla.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 475,
      name: 'Camping World Holdings',
      jobsLink: 'https://investor.campingworld.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 476,
      name: 'Ingredion',
      jobsLink: 'https://www.ingredion.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 477,
      name: 'Veritiv',
      jobsLink: 'https://www.veritivcorp.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 478,
      name: 'Beacon Roofing Supply',
      jobsLink: 'https://www.becn.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 479,
      name: 'Diamondback Energy',
      jobsLink: 'https://ir.diamondbackenergy.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 480,
      name: "Victoria's Secret",
      jobsLink: 'https://www.victoriassecret.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 481,
      name: 'Academy Sports and Outdoors',
      jobsLink: 'https://www.academy.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 482, name: 'Sanmina', jobsLink: 'https://www.sanmina.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 483,
      name: 'ON Semiconductor',
      jobsLink: 'https://www.onsemi.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 484,
      name: 'Commercial Metals',
      jobsLink: 'https://www.cmc.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 485,
      name: 'EnLink Midstream',
      jobsLink: 'https://www.enlink.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 486,
      name: 'Southwestern Energy',
      jobsLink: 'https://www.swn.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 487, name: 'Equinix', jobsLink: 'https://www.equinix.se/' },
  });
  await prisma.company.create({
    data: {
      rank: 488,
      name: "Dillard's",
      jobsLink: 'https://www.dillards.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 489,
      name: 'Regions Financial',
      jobsLink: 'https://ir.regions.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 490, name: 'Yum Brands', jobsLink: 'https://www.yum.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 491,
      name: 'Landstar System',
      jobsLink: 'https://www.landstar.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 492,
      name: 'CF Industries Holdings',
      jobsLink: 'https://www.cfindustries.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 493,
      name: 'Northern Trust',
      jobsLink: 'https://www.northerntrust.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 494,
      name: 'Robert Half International',
      jobsLink: 'https://www.roberthalf.com/',
    },
  });
  await prisma.company.create({
    data: {
      rank: 495,
      name: 'Compass',
      jobsLink: 'https://www.compass-group.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 496, name: 'Hasbro', jobsLink: 'https://shop.hasbro.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 497,
      name: 'Roper Technologies',
      jobsLink: 'https://www.ropertech.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 498, name: 'ARKO', jobsLink: 'https://www.arkocorp.com/' },
  });
  await prisma.company.create({
    data: {
      rank: 499,
      name: 'Frontier Communications',
      jobsLink: 'https://frontier.com/',
    },
  });
  await prisma.company.create({
    data: { rank: 500, name: 'Ameren', jobsLink: 'https://www.ameren.com/' },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
