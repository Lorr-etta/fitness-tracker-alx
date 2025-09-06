// src/components/WorkLogs/BodyPart.jsx
import React from 'react';
import { Stack, Typography } from '@mui/material';
import GymIcon from '../../assets/icons/gym.svg';
import DumbbellIcon from '../../assets/icons/dumbbell.svg';
import ProgressIcon from '../../assets/icons/progress.svg';
import ServicesIcon from '../../assets/icons/services.svg';
import TrainerIcon from '../../assets/icons/trainer.svg';
import YogaIcon from '../../assets/icons/yoga.svg';

const pickIcon = (name = '') => {
  const n = name.toLowerCase();
  if (n.includes('all')) return GymIcon;
  if (n.includes('back')) return DumbbellIcon;
  if (n.includes('cardio')) return ProgressIcon;
  if (n.includes('chest')) return ServicesIcon;
  if (n.includes('lower') && n.includes('arms')) return TrainerIcon;
  if (n.includes('arms')) return TrainerIcon;
  if (n.includes('lower') && n.includes('legs')) return DumbbellIcon;
  if (n.includes('legs') || n.includes('calves')) return DumbbellIcon;
  if (n.includes('abs') || n.includes('core')) return YogaIcon;
  if (n.includes('shoulder')) return DumbbellIcon;
  return GymIcon;
};

// brand colors
const BRAND = { green: '#50a963', pink: '#f1bcfc', orange: 'orangered' };
// decide INACTIVE color by category (orange or pink). ACTIVE is always green.
const pickInactiveColor = (name = '') => {
  const n = name.toLowerCase();
  // orange group
  if (n.includes('all')) return BRAND.orange;
  if (n.includes('back')) return BRAND.orange;
  if (n.includes('legs') || n.includes('calves')) return BRAND.orange;
  if (n.includes('shoulder')) return BRAND.orange;
  // pink group
  if (n.includes('abs') || n.includes('core')) return BRAND.pink;
  if (n.includes('arms')) return BRAND.pink;
  if (n.includes('cardio')) return BRAND.pink;
  if (n.includes('chest')) return BRAND.pink;
  return BRAND.orange;
};

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={() => {
      const base = {
        borderRadius: '16px',
        width: '180px',
        height: '80px',
        cursor: 'pointer',
        gap: '8px',
        transition: 'transform .15s ease, box-shadow .2s ease',
        '&:hover': { transform: 'translateY(-2px)' },
      };
      const color = pickInactiveColor(item);
      const isActive = bodyPart === item;
      if (isActive) {
        // Active pills always green
        const textColor = '#ffffff';
        return {
          ...base,
          background: BRAND.green,
          color: textColor,
          boxShadow: '0 8px 18px rgba(0,0,0,0.18)'
        };
      }
      return {
        ...base,
        background: color,
        color: color === BRAND.pink ? '#111111' : '#ffffff',
        border: `1px solid ${color}66`,
        boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
      };
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1000, left: 0, behavior: 'smooth' });
    }}
  >
    <img src={pickIcon(item)} alt="icon" style={{ width: '22px', height: '22px' }} />
    <Typography
      fontSize="16px"
      fontWeight="700"
      color="inherit"
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;