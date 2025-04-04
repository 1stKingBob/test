
// Edge Function: Get Documents
// This function returns document metadata based on the user's role
// Edge Functions run closer to users for lower latency

export default async function handler(request, response) {
  try {
    // Parse request parameters
    const { category, userRole } = request.query;
    
    // This would normally fetch from a database
    const documents = getDocumentsByCategory(category, userRole);
    
    // Return the data
    return response.status(200).json({
      documents,
      message: "Documents retrieved successfully",
    });
  } catch (error) {
    return response.status(500).json({
      error: "Failed to retrieve documents",
      details: error.message,
    });
  }
}

// Mock data function
function getDocumentsByCategory(category, userRole) {
  // In a real implementation, this would query a database
  const allDocuments = {
    "bylaws": [
      { id: 1, name: "Strata By-laws", access: "public" },
      { id: 2, name: "By-law Amendments 2024", access: "public" },
      { id: 3, name: "Proposed By-law Changes", access: "committee" }
    ],
    "financial": [
      { id: 4, name: "Annual Budget 2024-2025", access: "public" },
      { id: 5, name: "Quarterly Report Q1 2025", access: "public" },
      { id: 6, name: "Detailed Financial Analysis", access: "committee" }
    ],
    "minutes": [
      { id: 7, name: "AGM Minutes May 2024", access: "public" },
      { id: 8, name: "Committee Meeting March 2025", access: "public" },
      { id: 9, name: "Committee Meeting February 2025", access: "public" }
    ]
  };
  
  // Filter by category and access level
  if (!category || !allDocuments[category]) {
    return [];
  }
  
  return allDocuments[category].filter(doc => 
    doc.access === "public" || (userRole === "committee" && doc.access === "committee")
  );
}
