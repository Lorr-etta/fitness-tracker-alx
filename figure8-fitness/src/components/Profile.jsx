import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Grid, Paper, Stack, TextField, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const STORAGE_KEY = 'userProfile';
const STATS_KEY = 'workoutStats';

const Profile = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    height: '',
    weight: '',
    bio: '',
    fitnessGoals: '',
    photo: '' // base64 data URL
  });

  const fileRef = useRef(null);
  const navigate = useNavigate();
  const [stats, setStats] = useState({ totalWorkouts: 0, currentStreak: 0, bestStreak: 0, achievements: [] });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        setForm({
          name: data.name || '',
          email: data.email || '',
          age: data.age || '',
          height: data.height || '',
          weight: data.weight || '',
          bio: data.bio || '',
          fitnessGoals: data.fitnessGoals || '',
          photo: data.photo || ''
        });
      }
    } catch (e) {
      // ignore parsing errors
    }
    try {
      const rawStats = localStorage.getItem(STATS_KEY);
      if (rawStats) {
        const s = JSON.parse(rawStats);
        setStats({
          totalWorkouts: Number(s.totalWorkouts) || 0,
          currentStreak: Number(s.currentStreak) || 0,
          bestStreak: Number(s.bestStreak) || 0,
          achievements: Array.isArray(s.achievements) ? s.achievements : []
        });
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onPickImage = () => fileRef.current?.click();

  const onImageSelected = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm((f) => ({ ...f, photo: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const onSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  };

  const saveStats = (next) => {
    setStats(next);
    localStorage.setItem(STATS_KEY, JSON.stringify(next));
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1000, mx: 'auto' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
        <span />
        <Button size="small" variant="outlined" onClick={() => navigate('/')}>Exit</Button>
      </Stack>
      <Typography variant="h4" fontWeight={800} sx={{ mb: 3, textAlign: 'center', color: '#50a963', textShadow: '0 2px 6px rgba(80,169,99,0.3)' }}>
        Your Profile
      </Typography>

      <Paper elevation={3} sx={{ p: { xs: 2, md: 3 }, borderRadius: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Stack alignItems="center" spacing={2}>
              <Avatar src={form.photo} sx={{ width: 140, height: 140, border: '3px solid #f1bcfc' }} />
              <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={onImageSelected} />
              <Button variant="contained" onClick={onPickImage} sx={{ background: 'orangered', '&:hover': { background: '#cc3a00' } }}>
                Upload Photo
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Name" name="name" value={form.name} onChange={onChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" name="email" type="email" value={form.email} onChange={onChange} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="Age" name="age" type="number" value={form.age} onChange={onChange} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="Height (cm)" name="height" type="number" value={form.height} onChange={onChange} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="Weight (kg)" name="weight" type="number" value={form.weight} onChange={onChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Bio" name="bio" multiline minRows={3} value={form.bio} onChange={onChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Fitness Goals" name="fitnessGoals" multiline minRows={2} value={form.fitnessGoals} onChange={onChange} />
              </Grid>
            </Grid>

            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Button variant="contained" onClick={onSave} sx={{ background: '#50a963', '&:hover': { background: '#3e8a50' } }}>
                Save Profile
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => setForm({ name: '', email: '', age: '', height: '', weight: '', bio: '', fitnessGoals: '', photo: '' })}>
                Reset
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Quick Stats */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>Quick Stats</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
              <Typography variant="h6">Total Workouts</Typography>
              <Typography variant="h4" color="#50a963" fontWeight={900}>{stats.totalWorkouts}</Typography>
              <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 1 }}>
                <Button size="small" variant="contained" onClick={() => saveStats({ ...stats, totalWorkouts: stats.totalWorkouts + 1 })} sx={{ background: '#50a963' }}>+1</Button>
                <Button size="small" variant="outlined" onClick={() => saveStats({ ...stats, totalWorkouts: 0 })}>Reset</Button>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
              <Typography variant="h6">Current Streak</Typography>
              <Typography variant="h4" color="#50a963" fontWeight={900}>{stats.currentStreak}d</Typography>
              <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 1 }}>
                <Button size="small" variant="contained" onClick={() => saveStats({ ...stats, currentStreak: stats.currentStreak + 1, bestStreak: Math.max(stats.bestStreak, stats.currentStreak + 1) })} sx={{ background: '#50a963' }}>+1 day</Button>
                <Button size="small" variant="outlined" onClick={() => saveStats({ ...stats, currentStreak: 0 })}>Reset</Button>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
              <Typography variant="h6">Best Streak</Typography>
              <Typography variant="h4" color="#50a963" fontWeight={900}>{stats.bestStreak}d</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Achievements */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>Achievements</Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField fullWidth label="Add achievement" value={form._ach || ''} onChange={(e) => setForm(f => ({ ...f, _ach: e.target.value }))} />
          <Button variant="contained" onClick={() => {
            const title = (form._ach || '').trim();
            if (!title) return;
            const next = { ...stats, achievements: [...stats.achievements, { title, date: new Date().toISOString() }] };
            saveStats(next);
            setForm(f => ({ ...f, _ach: '' }));
          }} sx={{ background: 'orangered', '&:hover': { background: '#cc3a00' } }}>Add</Button>
        </Stack>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {(stats.achievements || []).map((a, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Paper sx={{ p: 2, borderRadius: 2 }}>
                <Typography fontWeight={700}>{a.title}</Typography>
                <Typography variant="body2" color="text.secondary">{new Date(a.date).toLocaleDateString()}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
