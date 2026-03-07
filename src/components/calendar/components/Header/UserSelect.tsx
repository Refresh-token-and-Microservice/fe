import { useCalendar } from '@/contexts/CalendarContext';

import { AvatarGroup } from '@/components/ui/avatar-group';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function UserSelect() {
    const { users, selectedUserId, setSelectedUserId } = useCalendar();

    return (
        <Select
            value={String(selectedUserId)}
            onValueChange={(val) => {
                setSelectedUserId(val === 'all' ? 'all' : Number(val));
            }}
        >
            <SelectTrigger className="flex-1 md:w-48">
                <SelectValue />
            </SelectTrigger>

            <SelectContent align="end">
                <SelectItem value="all">
                    <div className="flex items-center gap-1">
                        <AvatarGroup max={2}>
                            {users.map((user) => (
                                <Avatar key={user.userId} className="size-6 text-xxs">
                                    <AvatarFallback className="text-xxs">{user.firstName[0] || 'U'}</AvatarFallback>
                                </Avatar>
                            ))}
                        </AvatarGroup>
                        All
                    </div>
                </SelectItem>

                {users.map((user) => (
                    <SelectItem key={user.userId} value={String(user.userId)} className="flex-1">
                        <div className="flex items-center gap-2">
                            <Avatar key={user.userId} className="size-6">
                                <AvatarFallback className="text-xxs">{user.firstName[0] || 'U'}</AvatarFallback>
                            </Avatar>

                            <p className="truncate">{`${user.firstName} ${user.lastName}`.trim()}</p>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
