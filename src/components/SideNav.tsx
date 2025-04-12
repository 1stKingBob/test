
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Users, FileText, Wrench, Mail } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Committee", href: "/committee", icon: Users },
  { name: "Documents", href: "/documents", icon: FileText },
  { name: "Maintenance", href: "/maintenance", icon: Wrench },
  { name: "Contact", href: "/contact", icon: Mail },
];

const SideNav = () => {
  const location = useLocation();
  
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b pb-2">
        <div className="text-sm text-muted-foreground ml-2">
          Horizon Strata
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  isActive={isActive}
                  asChild
                  tooltip={item.name}
                >
                  <Link to={item.href} className="flex items-center">
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t py-2">
        <div className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Horizon Strata
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideNav;
