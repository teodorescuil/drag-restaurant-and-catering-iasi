/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import DailyMenuClient from './DailyMenuClient';
import { foodWeeklyMenu } from '../../helpers/constants/weekly-menu';

export default function DailyMenuServer() {
  // NU mai chemăm getCurrentWeek pe server. Trimitem TOATĂ structura săptămânilor.
  return <DailyMenuClient foodWeeklyMenu={foodWeeklyMenu} />;
}
