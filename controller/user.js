

export const getMyProfile = async (req, res) => {
   try {
      res.status(200).json({
         success: true,
         controller:"getmyProfile",
         user: req.user
      });
   } catch (error) {
      res.status(200).json({
         success: false,
         controller:"getmyProfile",
         error: error.message
      });
   }
};

export const logout = async (req, res) => {
   try {
      req.session.destroy((err) => {
         if (err) return next(err);
         res.clearCookie("connect.sid");
         res.status(200).json({
            message: "Logged Out",
         });
      });
      
   } catch (error) {
      res.status(200).json({
         success: false,
         error: error.message
      });
   }
};