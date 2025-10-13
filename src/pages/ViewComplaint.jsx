import { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  TextField,
  Chip,
  Button,
  CircularProgress,
  Divider,
} from '@mui/material';
import { BASE_URL, COMPLAINT_URL } from '../Url';

const ViewComplaint = () => {
  const [ticketId, setTicketId] = useState('');
  const [complaintData, setComplaintData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Convert an ISO/UTC timestamp string to a localized, human-readable string
  const formatUTCToLocal = (utcString) => {
    if (!utcString) return '—';
    try {
      const d = new Date(utcString);
      if (Number.isNaN(d.getTime())) return utcString;
      return d.toLocaleString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    } catch (e) {
      return utcString;
    }
  };


   const statusStyles = {
  open: {
    color: 'primary.main',
    borderColor: 'primary.light',
  },
  in_progress: {
    color: 'info.main',
    borderColor: 'info.light',
  },
  resolved: {
    color: 'success.main',
    borderColor: 'success.light',
  },
  closed: {
    color: 'grey.700',
    borderColor: 'grey.400',
  },
  on_hold: {
    color: 'warning.main',
    borderColor: 'warning.light',
  }
};

  const handleFetchComplaint = async (e) => {
    e.preventDefault();
    if (!ticketId.trim()) {
      setError('Please enter a valid Ticket ID.');
      return;
    }

    setError('');
    setLoading(true);
    setComplaintData(null);

    try {
      const response = await axios.get(`${BASE_URL}${COMPLAINT_URL}${ticketId}/`);
      console.log('Fetched complaint data:', response.data);
      setComplaintData(response.data);
    } catch (err) {
      console.error('Error fetching complaint:', err);
      setError('No complaint found for the given Ticket ID.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        px: 2,
        py: 4,
        bgcolor: 'grey.50',
      }}
    >
      <Box
        component="section"
        sx={{
          width: { xs: '95%', md: '70%', lg: '50%' },
          bgcolor: 'white',
          border: '1px solid #D1D5DB',
          borderRadius: '8px',
          px: 3,
          py: 4,
          boxShadow: 1,
        }}
      >
        <Typography variant="h4" sx={{ mb: 0.5, fontWeight: 'bold', color: '#202020' }}>
          Fetch Your Complaint Details
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
          Enter a Ticket ID below to view its details
        </Typography>

        <Box component="form" onSubmit={handleFetchComplaint} sx={{ mt: 6, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <FormControl sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <FormLabel htmlFor="ticketId" sx={{ color: 'black', fontWeight: 'bold' }}>Ticket ID</FormLabel>
            <TextField
              id="ticketId"
              value={ticketId}
              onChange={(e) => setTicketId(e.target.value)}
              placeholder="Enter Your Ticket ID"
              variant="outlined"
              sx={{ borderRadius: '4px', width: { xs: '100%', md: '70%' } }}
            />
          </FormControl>

          {error && (
            <Typography variant="body2" color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: { xs: '100%', md: '30%' },
              mt: 1,
              bgcolor: '#04B7B1',
              color: 'white',
              borderRadius: '4px',
              textTransform: 'none',
              py: 1.5,
              '&:hover': { bgcolor: '#03A6A0' },
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Get Complaint Details'}
          </Button>
        </Box>

        {complaintData && (
          <>
            <Divider sx={{ my: 4 }} />
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Complaint Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body1"><strong>Ticket ID:</strong> {complaintData.ticket_id}</Typography>
              <Typography variant="body1"><strong>Submitted At:</strong> {formatUTCToLocal(complaintData.submitted_at)}</Typography>
              <Typography variant="body1"><strong>Issue Type:</strong> {complaintData.issue_type}</Typography>
              <Typography variant="body1"><strong>Priority:</strong> {complaintData.priority}</Typography>
              <Typography variant="body1"><strong>Description:</strong> {complaintData.description}</Typography>
              <div className='flex flex-row items-center'>
                <Typography variant="body1"><strong>Status:</strong> </Typography>
                <Chip
                label={complaintData.status}
                sx={{
                  ml: 2,
                  height: 20,
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  border: '1px solid',
                  ...statusStyles[complaintData.status],
                  bgcolor: 'transparent',
                  borderRadius: '16px',
                }}
                key="status-badge"
              />
              </div>
              
                
              <Typography variant="body1"><strong>Room Number:</strong> {complaintData.room.room_no}</Typography>
              <Typography variant="body1"><strong>Block:</strong> {complaintData.room.Block}</Typography>
              <Typography variant="body1"><strong>Ward:</strong> {complaintData.room.ward}</Typography>
              <Typography variant="body1"><strong>Floor:</strong> {complaintData.room.Floor_no}</Typography>
              <Typography variant="body1"><strong>Department:</strong> {complaintData.assigned_department || '—'}</Typography>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ViewComplaint;
