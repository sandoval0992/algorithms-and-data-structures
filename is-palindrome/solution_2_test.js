const palindrome = require('./solution_2');

test('"kayak" is a palindrome', () => {
  expect(palindrome('kayak')).toBeTruthy();
});

test('"deified" is a palindrome', () => {
  expect(palindrome('deified')).toBeTruthy();
});

test('"rotator" is a palindrome', () => {
  expect(palindrome('rotator')).toBeTruthy();
});

test('"repaper" is a palindrome', () => {
  expect(palindrome('repaper')).toBeTruthy();
});

test('"deed" is a palindrome', () => {
  expect(palindrome('deed')).toBeTruthy();
});

test('"peep" is a palindrome', () => {
  expect(palindrome('peep')).toBeTruthy();
});

test('"wow" is a palindrome', () => {
  expect(palindrome('wow')).toBeTruthy();
});

test('"noon" is a palindrome', () => {
  expect(palindrome('noon')).toBeTruthy();
});

test('"civic" is a palindrome', () => {
  expect(palindrome('civic')).toBeTruthy();
});

test('"racecar" is a palindrome', () => {
  expect(palindrome('racecar')).toBeTruthy();
});

test('"level" is a palindrome', () => {
  expect(palindrome('level')).toBeTruthy();
});

test('"mom" is a palindrome', () => {
  expect(palindrome('mom')).toBeTruthy();
});

test('"bird rib" is a palindrome', () => {
  expect(palindrome('bird rib')).toBeTruthy();
});

test('"taco cat" is a palindrome', () => {
  expect(palindrome('taco cat')).toBeTruthy();
});

test('"UFO tofu" is a palindrome', () => {
  expect(palindrome('UFO tofu')).toBeTruthy();
});

test('"Borrow or rob?" is a palindrome', () => {
  expect(palindrome('Borrow or rob?')).toBeTruthy();
});

test('"Never odd or even." is a palindrome', () => {
  expect(palindrome('Never odd or even.')).toBeTruthy();
});

test('"We panic in a pew." is a palindrome', () => {
  expect(palindrome('We panic in a pew.')).toBeTruthy();
});

test('"Won’t lovers revolt now?" is a palindrome', () => {
  expect(palindrome('Won’t lovers revolt now?')).toBeTruthy();
});

test('"Ma is a nun, as I am." is a palindrome', () => {
  expect(palindrome('Ma is a nun, as I am.')).toBeTruthy();
});

test('"Don’t nod." is a palindrome', () => {
  expect(palindrome('Don’t nod.')).toBeTruthy();
});

test('"Sir, I demand, I am a maid named Iris." is a palindrome', () => {
  expect(palindrome('Sir, I demand, I am a maid named Iris.')).toBeTruthy();
});

test('"Was it a car or a cat I saw? " is a palindrome', () => {
  expect(palindrome('Was it a car or a cat I saw? ')).toBeTruthy();
});

test('"Yo, Banana Boy! " is a palindrome', () => {
  expect(palindrome('Yo, Banana Boy! ')).toBeTruthy();
});

test('"Eva, can I see bees in a cave?" is a palindrome', () => {
  expect(palindrome('Eva, can I see bees in a cave?')).toBeTruthy();
});

test('"Madam, in Eden, I’m Adam. " is a palindrome', () => {
  expect(palindrome('Madam, in Eden, I’m Adam. ')).toBeTruthy();
});

test('"A man, a plan, a canal, Panama!" is a palindrome', () => {
  expect(palindrome('A man, a plan, a canal, Panama!')).toBeTruthy();
});

test('"Never a foot too far, even. " is a palindrome', () => {
  expect(palindrome('Never a foot too far, even. ')).toBeTruthy();
});

test('"Red roses run no risk, sir, on Nurse’s order. " is a palindrome', () => {
  expect(
    palindrome('Red roses run no risk, sir, on Nurse’s order. ')
  ).toBeTruthy();
});

test('"He lived as a devil, eh?" is a palindrome', () => {
  expect(palindrome('He lived as a devil, eh?')).toBeTruthy();
});

test('"Ned, I am a maiden. " is a palindrome', () => {
  expect(palindrome('Ned, I am a maiden. ')).toBeTruthy();
});

test('"Now, sir, a war is won!" is a palindrome', () => {
  expect(palindrome('Now, sir, a war is won!')).toBeTruthy();
});

test('"Evade me, Dave!" is a palindrome', () => {
  expect(palindrome('Evade me, Dave!')).toBeTruthy();
});

test('"Dennis and Edna sinned. " is a palindrome', () => {
  expect(palindrome('Dennis and Edna sinned. ')).toBeTruthy();
});

test('"Step on no pets!" is a palindrome', () => {
  expect(palindrome('Step on no pets!')).toBeTruthy();
});
