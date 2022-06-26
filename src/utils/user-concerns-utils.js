import {reduce} from 'lodash';
import {concerns} from '../constants/quizQuestions';

export const getConcernName = (concernKey) => {
  let concernName = '';
  switch (concernKey) {
    case 'angerTotal':
      concernName = 'Anger';
      break;
    case 'anxietyTotal':
      concernName = 'Anxiety and Panic Attacks';
      break;
    case 'depressionTotal':
      concernName = 'Depression';
      break;
    case 'eatingDisorderTotal':
      concernName = 'Eating Disorder';
      break;
    case 'selfEsteemTotal':
      concernName = 'Self Esteem';
      break;
    case 'selfHarmTotal':
      concernName = 'Self Harm';
      break;
    case 'stressTotal':
      concernName = 'Stress';
      break;
    case 'sleepDisorderTotal':
      concernName = 'Sleep Disorder';
      break;
  }
  return concernName;
};

export const calculateConcernScores = (questions) => {
  const {
    angerTotal,
    anxietyTotal,
    depressionTotal,
    eatingDisorderTotal,
    selfEsteemTotal,
    selfHarmTotal,
    stressTotal,
    sleepDisorderTotal,
  } = reduce(
    questions.questions,
    (acc, item) => {
      if (item.concernType === concerns.ANGER) {
        acc.angerTotal = Number(acc.angerTotal) + Number(item.selectedOption);
      } else if (item.concernType === concerns.ANXIETY_AND_PANIC_ATTACKS) {
        acc.anxietyTotal += item.selectedOption;
      } else if (item.concernType === concerns.DEPRESSION) {
        acc.depressionTotal += item.selectedOption;
      } else if (item.concernType === concerns.EATING_DISORDER) {
        acc.eatingDisorderTotal += item.selectedOption;
      } else if (item.concernType === concerns.SELF_ESTEEM) {
        acc.selfEsteemTotal += item.selectedOption;
      } else if (item.concernType === concerns.SELF_HARM) {
        acc.selfHarmTotal += item.selectedOption;
      } else if (item.concernType === concerns.STRESS) {
        acc.stressTotal += item.selectedOption;
      } else if (item.concernType === concerns.SLEEPING_DISORDER) {
        acc.sleepDisorderTotal += item.selectedOption;
      }
      return acc;
    },
    {
      angerTotal: 0,
      anxietyTotal: 0,
      depressionTotal: 0,
      eatingDisorderTotal: 0,
      selfEsteemTotal: 0,
      selfHarmTotal: 0,
      stressTotal: 0,
      sleepDisorderTotal: 0,
    },
  );
  return {
    angerTotal,
    anxietyTotal,
    depressionTotal,
    eatingDisorderTotal,
    selfEsteemTotal,
    selfHarmTotal,
    stressTotal,
    sleepDisorderTotal,
  };
};
