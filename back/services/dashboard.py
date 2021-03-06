from django.contrib.auth import get_user_model

FoxUser = get_user_model()

DEFINITIONS = {
    FoxUser.Role.client_manager: {
        "dashboard": {
            "sidebar": [
                {
                    "_tag": "CSidebarNavItem",
                    "name": "Dashboard",
                    "to": "/dashboard",
                    "icon": "cil-speedometer",
                },
            ],
            "header_nav": [
                {
                    "_tag": "CHeaderNavItem",
                    "id": "head_nav_approvals",
                    "className": "px-3",
                    "_children": [
                        {
                            "_tag": "FoxHeaderNavLink",
                            "id": "head_nav_link_approvals",
                            "to": "/applications",
                            "linktext": "Approvals",
                        },
                    ],
                },
                {
                    "_tag": "CHeaderNavItem",
                    "id": "head_nav_current",
                    "className": "px-3",
                    "_children": [
                        {
                            "_tag": "FoxHeaderNavLink",
                            "id": "head_nav_link_works",
                            "to": "/works",
                            "linktext": "Current Works",
                        },
                    ],
                },
            ],
        }
    },
    FoxUser.Role.contractor: {
        "dashboard": {
            "sidebar": [
                {
                    "_tag": "CSidebarNavItem",
                    "name": "Dashboard",
                    "to": "/dashboard",
                    "icon": "cil-speedometer",
                },
                {"_tag": "CSidebarNavTitle", "_children": ["APPLICATION"]},
                {
                    "_tag": "CSidebarNavDropdown",
                    "name": "Personnel Management",
                    "route": "/contractor/personal",
                    "icon": "cil-user",
                    "_children": [
                        {
                            "_tag": "CSidebarNavItem",
                            "name": "1. Responsible Person",
                            "to": "/project/${CURRENT_PROJECT_ID}/responsible_person",
                        },
                        {
                            "_tag": "CSidebarNavItem",
                            "name": "2. Safety",
                            "to": "safety_video",
                        },
                        {
                            "_tag": "CSidebarNavItem",
                            "name": "3. Assign Workers",
                            "to": "assign_workers",
                        },
                    ],
                },
                {
                    "_tag": "CSidebarNavDropdown",
                    "name": "Documentation",
                    "route": "/contractor/general",
                    "icon": "cil-file",
                    "_children": [
                        {
                            "_tag": "CSidebarNavItem",
                            "name": "1. Related docs",
                            "to": "related_documents",
                        },
                        {
                            "_tag": "CSidebarNavItem",
                            "name": "2. Submit Proposal",
                            "to": "submit_proposal",
                        },
                    ],
                },
                {
                    "_tag": "CSidebarNavItem",
                    "name": "Application status",
                    "to": "/contractor-application-status",
                    "icon": "",
                },
                {"_tag": "CSidebarNavTitle", "_children": ["WORKS"]},
                {
                    "_tag": "CSidebarNavItem",
                    "name": "Workflow",
                    "to": "/contactor/work/status",
                    "icon": "cil-av-timer",
                },
            ],
            "header_nav": [
                {
                    "_tag": "CHeaderNavItem",
                    "id": "head_nav_workers",
                    "className": "px-3",
                    "_children": [
                        {
                            "_tag": "FoxHeaderNavLink",
                            "id": "head_nav_link_workers",
                            "to": "/workers",
                            "linktext": "Workers",
                        }
                    ],
                },
                {
                    "_tag": "CHeaderNavItem",
                    "id": "head_nav_projects",
                    "className": "px-3",
                    "_children": [
                        {
                            "_tag": "FoxHeaderNavLink",
                            "id": "head_nav_link_projects",
                            "to": "/projects",
                            "linktext": "Projects",
                        }
                    ],
                },
            ],
        }
    },
    FoxUser.Role.client_admin: {
        "dashboard": {
            "sidebar": [
                {
                    "_tag": "CSidebarNavItem",
                    "name": "Dashboard",
                    "to": "/dashboard",
                    "icon": "cil-speedometer",
                },
            ],
            "header_nav": [
                {
                    "_tag": "CHeaderNavItem",
                    "id": "head_nav_managers",
                    "className": "px-3",
                    "_children": [
                        {
                            "_tag": "FoxHeaderNavLink",
                            "id": "head_nav_link_managers",
                            "to": "/managers",
                            "linktext": "Managers",
                        }
                    ],
                },
                {
                    "_tag": "CHeaderNavItem",
                    "id": "head_nav_projects",
                    "className": "px-3",
                    "_children": [
                        {
                            "_tag": "FoxHeaderNavLink",
                            "id": "head_nav_link_projects",
                            "to": "/projects",
                            "linktext": "Projects",
                        }
                    ],
                },
                {
                    "_tag": "CHeaderNavItem",
                    "id": "head_nav_contractors",
                    "className": "px-3",
                    "_children": [
                        {
                            "_tag": "FoxHeaderNavLink",
                            "id": "head_nav_link_contractors",
                            "to": "/contractors",
                            "linktext": "Contractors",
                        }
                    ],
                },
                {
                    "_tag": "CHeaderNavItem",
                    "id": "head_nav_approvals",
                    "className": "px-3",
                    "_children": [
                        {
                            "_tag": "FoxHeaderNavLink",
                            "id": "head_nav_link_approvals",
                            "to": "/approvals",
                            "linktext": "Approvals",
                        }
                    ],
                },
            ],
        }
    },
    FoxUser.Role.dummy: {
        "dashboard": {
            "sidebar": [
                {
                    "_tag": "CSidebarNavItem",
                    "name": "Dashboard",
                    "to": "/dashboard",
                    "icon": "cil-speedometer",
                },
            ],
            "header_nav": [
                {
                    "_tag": "CHeaderNavItem",
                    "id": "head_nav_example",
                    "className": "px-3",
                    "_children": [
                        {
                            "_tag": "FoxHeaderNavLink",
                            "id": "head_nav_link_example",
                            "to": "/",
                            "linktext": "Example",
                        }
                    ],
                },
            ],
        }
    },
}


def get_dashboard_definition(user_role):
    return DEFINITIONS[user_role]
