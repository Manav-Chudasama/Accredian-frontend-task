const API_URL = import.meta.env.VITE_API_URL; 

export const referralService = {
  createReferral: async (referralData) => {
    try {
      const response = await fetch(`${API_URL}/referrals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(referralData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create referral');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  getUserStats: async () => {
    try {
      const response = await fetch(`${API_URL}/users/stats`);
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to fetch user statistics');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  getReferralStats: async () => {
    try {
      const response = await fetch(`${API_URL}/referrals/stats`);
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to fetch referral statistics');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}; 