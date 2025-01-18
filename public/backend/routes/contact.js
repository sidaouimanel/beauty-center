router.post('/', async (req, res) => {
    console.log('Données reçues:', req.body); // Ajoute ceci pour vérifier les données reçues
  
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });
  
    try {
      const newContact = await contact.save();
      res.status(201).json(newContact);
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement:', error); // Ajoute ceci pour vérifier les erreurs
      res.status(400).json({ message: error.message });
    }
  });
  