import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Badge badgeContent={4} color="primary">
        <MailIcon color="action" />
      </Badge>
      <div>
        <AcUnitIcon fontSize="large" />
      </div>
    </div>
  );
}
