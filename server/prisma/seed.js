const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function seed() {
  const password = await bcrypt.hash('123', 8);

  const createdUser = await prisma.user.create({
    data: {
      email: 'maxpower@email.com',
      password,
    },
  });

  const createdProfile = await prisma.profile.create({
    data: {
      userId: createdUser.id,
      firstname: 'Max',
      lastname: 'Power',
      biography: 'I got my name off a microwave',
    },
  });

  const userPostOne = await prisma.post.create({
    data: {
      userId: createdUser.id,
      title: 'My first post',
      content: `Ahh so much to say and so little time`,
      category: `GENERAL`,
      ownerName: createdUser.username,
    },
  });

  const createdCommentOne = await prisma.comment.create({
    data: {
      postId: userPostOne.id,
      userId: createdUser.id,
      content: `Load of bollocks`,
    },
  });

  const userPostTwo = await prisma.post.create({
    data: {
      userId: createdUser.id,
      title: 'My second post',
      content: `Will it work?`,
      category: `GENERAL`,
      ownerName: createdUser.username,
    },
  });

  const userPostThree = await prisma.post.create({
    data: {
      userId: createdUser.id,
      title: 'My 3rd post',
      content: `3 is the magic number`,
      category: `EVENTS`,
      ownerName: createdUser.username,
    },
  });

  const userPostFour = await prisma.post.create({
    data: {
      userId: createdUser.id,
      title: 'My 4TH post',
      content: `SQUARE ROOT OF WHATEVER`,
      category: `EVENTS`,
      ownerName: createdUser.username,
    },
  });

  const userPostFive = await prisma.post.create({
    data: {
      userId: createdUser.id,
      title: 'My V Post',
      content: `Romans get it`,
      category: `NEWBIES`,
      ownerName: createdUser.username,
    },
  });

  const userPostSix = await prisma.post.create({
    data: {
      userId: createdUser.id,
      title: '666',
      content: `Ahh the devil is here`,
      category: `NEWBIES`,
      ownerName: createdUser.username,
    },
  });

  const createdUserTwo = await prisma.user.create({
    data: {
      email: 'atanzarian@email.com',
      password,
    },
  });

  const createdAdmin = await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      password,
      role: `ADMIN`,
    },
  });

  const createdAdminProfile = await prisma.profile.create({
    data: {
      userId: createdAdmin.id,
      firstname: 'admin',
      lastname: 'magic',
      biography: 'I have my powers of administaration',
    },
  });

  const createdDev = await prisma.user.create({
    data: {
      email: 'dev@email.com',
      password,
      role: `DEVELOPER`,
    },
  });

  const linkOne = await prisma.link.create({
    data: {
      company: 'Betfair',
      betType: 'Matched',
      minBet: 10,
      url: `https://www.betfair.com`,
      endDate: new Date(),
      desc: `A exchange and a bookie`,
      qualifyingBet: 10,
    },
  });

  const linkTwo = await prisma.link.create({
    // TODO: make the numbers decimal point
    data: {
      company: 'BetFred',
      betType: 'Matched',
      minBet: 10,
      url: `https://www.betfred.com`,
      endDate: new Date(),
      desc: `A bookie`,
      qualifyingBet: 10,
      potentialProfit: 7,
    },
  });

  const createdSportEventOne = await prisma.sportevent.create({
    data: {
      title: 'Everton vs Chelsea',
      sportType: 'football',
      betTypes: ['win', 'lose', 'draw'],
      competitors: ['Everton', 'chelsea'],
    },
  });

  const createdSportEventTwo = await prisma.sportevent.create({
    data: {
      title: 'The Grand National',
      sportType: 'racing',
      betTypes: ['win'],
      competitors: ['bigDuck', 'shesTheFastest', 'dontHoofMe', 'ponyBoy', 'theHorseNorse', 'splashy'],
    },
  });

  const createdSportEventThree = await prisma.sportevent.create({
    data: {
      title: 'Royal Ascot',
      sportType: 'racing',
      betTypes: ['win'],
      competitors: ['chillyHair', 'crowdPleaser', 'lastHorseInn', 'fastFucker', 'irishStew', 'soonGlue'],
    },
  });

  console.log(
    'users',
    createdUser,
    userPostOne,
    createdUserTwo,
    createdProfile,
    createdAdmin,
    createdDev,
    createdCommentOne,
    linkOne,
    linkTwo,
    createdAdminProfile,
    createdSportEventOne,
    createdSportEventTwo
  );
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
