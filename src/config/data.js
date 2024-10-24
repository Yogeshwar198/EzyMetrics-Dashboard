export const data = {
    "dashboard": {
        "totalUsers": 1500,
        "activeUsers": 1200,
        "totalRevenue": 75000,
        "newUsersToday": 45,
        "monthlyGrowthRate": "8.5%",
        "recentActivities": [
            { "id": 1, "activity": "User John Doe signed up.", "timestamp": "2024-10-24T10:15:30Z" },
            { "id": 2, "activity": "Lead converted to customer.", "timestamp": "2024-10-24T09:45:00Z" },
            { "id": 3, "activity": "Generated monthly report.", "timestamp": "2024-10-23T15:30:45Z" },
            { "id": 4, "activity": "Lead", "timestamp": "2024-10-24T24:20:25z" }
        ]
    },
    "leads": [
        {
            "id": 101,
            "name": "Alice Johnson",
            "email": "alice.johnson@example.com",
            "status": "Interested",
            "lastContacted": "2024-10-20",
            "assignedTo": "Sales Agent A"
        },
        {
            "id": 102,
            "name": "Bob Smith",
            "email": "bob.smith@example.com",
            "status": "Converted",
            "lastContacted": "2024-10-18",
            "assignedTo": "Sales Agent B"
        },
        {
            "id": 103,
            "name": "Jone deo",
            "email": "Jone.deo@example.com",
            "status": "Not Interested",
            "lastContacted": "2024-10-15",
            "assignedTo": "Sales Agent C"
        },
        {
            "id": 104,
            "name": "Charlie Brown",
            "email": "charlie.brown@example.com",
            "status": "Not Converted",
            "lastContacted": "2024-10-24",
            "assignedTo": "Sales Agent D"
        }
    ],
    "analytics": {
        "websiteTraffic": {
            "totalVisits": 25000,
            "uniqueVisitors": 18000,
            "pageViewsPerVisit": 3.5,
            "bounceRate": "35%"
        },
        "salesData": {
            "totalSales": 950,
            "salesGrowth": "12%",
            "topProducts": [
                { "productName": "Product A", "sales": 300 },
                { "productName": "Product B", "sales": 250 },
                { "productName": "Product C", "sales": 200 },
                { "productName": "Product D", "sales": 350 }
            ]
        },
        "userDemographics": {
            "ageGroups": {
                "18-24": "30%",
                "25-34": "40%",
                "35-44": "20%",
                "45-54": "10%"
            },
            "locations": [
                { "country": "United States", "percentage": "45%" },
                { "country": "United Kingdom", "percentage": "20%" },
                { "country": "Canada", "percentage": "15%" },
                { "country": "Australia", "percentage": "10%" },
                { "country": "Others", "percentage": "10%" }
            ]
        }
    },
    "reports": [
        {
            "reportId": 201,
            "title": "Monthly Sales Report",
            "generatedBy": "Admin",
            "dateGenerated": "2024-10-01",
            "summary": "Shows the sales performance for the last month.",
            "fileUrl": "/reports/monthly-sales-report.pdf"
        },
        {
            "reportId": 202,
            "title": "Website Traffic Analysis",
            "generatedBy": "Marketing Team",
            "dateGenerated": "2024-09-28",
            "summary": "Analysis of website traffic sources and visitor behavior.",
            "fileUrl": "/reports/traffic-analysis.pdf"
        },
        {
            "reportId": 203,
            "title": "Lead Conversion Statistics",
            "generatedBy": "Sales Department",
            "dateGenerated": "2024-09-20",
            "summary": "Statistics on lead conversion rates and customer acquisition.",
            "fileUrl": "/reports/lead-conversion.pdf"
        },
        {
            "reportId": 204,
            "title": "Quarterly Financial Overview",
            "generatedBy": "Finance Team",
            "dateGenerated": "2024-10-15",
            "summary": "Provides an overview of the company's financial performance for the last quarter, including revenue, expenses, and profit margins.",
            "fileUrl": "/reports/quarterly-financial-overview.pdf"
        }        
    ],
    "settings": {
        "profile": {
            "username": "admin",
            "email": "admin@example.com",
            "role": "Administrator",
            "language": "English",
            "timezone": "GMT-5"
        },
        "notifications": {
            "emailNotifications": true,
            "smsNotifications": false,
            "pushNotifications": true
        },
        "privacy": {
            "dataSharing": true,
            "adPersonalization": false
        }
    }
}
