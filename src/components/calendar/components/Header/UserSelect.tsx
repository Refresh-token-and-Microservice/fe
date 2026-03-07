import { useCalendar } from '@/contexts/CalendarContext';

import { AvatarGroup } from '@/components/ui/avatar-group';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function UserSelect() {
    const { admins, selectedUserId, setSelectedUserId } = useCalendar();

    return (
        <Select value={String(selectedUserId)} onValueChange={(val) => setSelectedUserId(val === 'all' ? 'all' : Number(val))}>
            <SelectTrigger className="flex-1 md:w-48">
                <SelectValue />
            </SelectTrigger>

            <SelectContent align="end">
                <SelectItem value="all">
                    <div className="flex items-center gap-1">
                        <AvatarGroup max={2}>
                            {admins.map((admin) => (
                                <Avatar key={admin.id} className="size-6 text-xxs">
                                    <AvatarFallback className="text-xxs">{admin.firstName?.[0] || 'U'}</AvatarFallback>
                                </Avatar>
                            ))}
                        </AvatarGroup>
                        All
                    </div>
                </SelectItem>

                {admins.map((admin) => (
                    <SelectItem key={admin.id} value={String(admin.id)} className="flex-1">
                        <div className="flex items-center gap-2">
                            <Avatar key={admin.id} className="size-6">
                                <AvatarFallback className="text-xxs">{admin.firstName?.[0] || 'U'}</AvatarFallback>
                            </Avatar>

                            <p className="truncate">{`${admin.firstName || ''} ${admin.lastName || ''}`.trim()}</p>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
