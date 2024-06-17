import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Copy,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  type LucideIcon,
  type LucideProps,
  Moon,
  MoreVertical,
  Pencil,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  Menu,
  X,
  Search,
  MapPin,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  twitter: Twitter,
  check: Check,
  copy: Copy,
  copyDone: ClipboardCheck,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  pencil: Pencil,
  menu: Menu,
  search: Search,
  map: MapPin,
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  badge: (props: LucideProps) => (
    <svg
      width="26"
      height="32"
      viewBox="0 0 26 32"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="#F4ECDF"
        strokeWidth="4"
        d="M12.5219 29.9872C6.30989 29.8665 1.3719 24.7328 1.4926 18.5208L1.75486 5.02333C1.7951 2.95265 3.50633 1.30665 5.57701 1.34689L20.5742 1.63829C22.6449 1.67853 24.2909 3.38976 24.2506 5.46043L23.9884 18.9579C23.8677 25.1699 18.734 30.1079 12.5219 29.9872Z"
      />
      <path
        d="M12.5219 29.9872C6.30989 29.8665 1.3719 24.7328 1.4926 18.5208L1.75486 5.02333C1.7951 2.95265 3.50633 1.30665 5.57701 1.34689L20.5742 1.63829C22.6449 1.67853 24.2909 3.38976 24.2506 5.46043L23.9884 18.9579C23.8677 25.1699 18.734 30.1079 12.5219 29.9872Z"
        fill={props.color}
        strokeWidth="2.5"
      />
    </svg>
  ),
};
